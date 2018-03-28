-- Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.
SELECT FirstName ||" "|| LastName AS FullName, CustomerId, Country
FROM Customer
WHERE Country != "USA";

-- Provide a query only showing the Customers from Brazil.
SELECT * FROM Customer
WHERE Country = "Brazil";

-- Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country.
SELECT FirstName ||" "|| LastName AS FullName, InvoiceId, InvoiceDate, BillingCountry
FROM Customer, Invoice
WHERE Country = "Brazil";

-- Provide a query showing only the Employees who are Sales Agents.
SELECT * FROM Employee
WHERE Title = "Sales Support Agent";

-- Provide a query showing a unique list of billing countries from the Invoice table.
SELECT DISTINCT BillingCountry FROM Invoice;

-- Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name.
SELECT Invoice.*, Emp.FirstName ||" "|| Emp.LastName AS RepName
FROM Invoice, Employee emp, Customer cu
WHERE Emp.Title = "Sales Support Agent"
AND Invoice.CustomerId = Cu.CustomerId
AND Cu.SupportRepId = emp.EmployeeId;

-- Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.
SELECT Inv.Total, Cu.FirstName ||" "|| Cu.LastName AS CustomerName,
Cu.Country, Emp.FirstName ||" "|| Emp.LastName AS RepName
FROM Invoice Inv, Customer Cu, Employee Emp
WHERE Emp.Title = "Sales Support Agent"
AND Inv.CustomerId = Cu.CustomerId
AND Cu.SupportRepId = Emp.EmployeeId;

-- How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?
SELECT COUNT(*) AS 'Count', SUM(Total) AS 'Total', 
SUBSTR(InvoiceDate,1,4) AS 'Year'
FROM Invoice
WHERE InvoiceDate LIKE '2009%'
UNION
SELECT COUNT(*) AS 'Count', SUM(Total) AS 'Total',
SUBSTR(InvoiceDate,1,4) AS 'Year'
FROM Invoice
WHERE InvoiceDate LIKE '2011%';

-- Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
SELECT SUM(Quantity) FROM InvoiceLine
WHERE InvoiceId = 37;

-- Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: GROUP BY
SELECT SUM(Quantity), InvoiceId
FROM InvoiceLine
GROUP BY InvoiceId;

-- Query that includes the track name with each invoice line item.
SELECT InvoiceLine.*, Track.name
FROM InvoiceLine, Track
WHERE InvoiceLine.InvoiceLineId = Track.TrackId;

-- Provide a query that includes the purchased track name AND artist name with each invoice line item.
SELECT InvoiceLine.*, Track.name AS 'Track', Artist.name AS 'Artist'
FROM InvoiceLine, Track, Artist, Album
WHERE InvoiceLine.InvoiceLineId = Track.TrackId
AND Track.AlbumId = Album.AlbumId
AND Album.ArtistId = Artist.ArtistId;

-- Provide a query that shows the # of invoices per country. 
SELECT COUNT(*), BillingCountry
FROM Invoice
GROUP BY BillingCountry;

-- Provide a query that shows the total number of tracks in each playlist. The Playlist name should be included on the resultant table.
SELECT Playlist.Name, COUNT(*) AS 'Track Count'
FROM Playlist, PlaylistTrack
WHERE Playlist.PlaylistId = PlaylistTrack.PlaylistId
GROUP BY Playlist.Name;

-- Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre
SELECT Track.Name AS 'Track', Album.Title AS 'Album', MediaType.Name AS 'media', Genre.Name AS 'genre'
FROM Track, Album, MediaType, Genre
WHERE Track.AlbumId = Album.AlbumId
AND Track.GenreId = Genre.GenreId
AND Track.MediaTypeId = MediaType.MediaTypeId;

-- Provide a query that shows all Invoices but includes the # of invoice line items
SELECT Invoice.*, COUNT(*) AS '# of items'
FROM Invoice, InvoiceLine
WHERE Invoice.InvoiceId = InvoiceLine.InvoiceId
GROUP BY Invoice.InvoiceId;

-- Provide a query that shows total sales made by each sales agent.
SELECT Emp.FirstName ||" "|| Emp.LastName AS RepName, 
SUM(Inv.Total) AS 'Total'
FROM Invoice Inv, Customer Cu, Employee Emp
WHERE Emp.Title = "Sales Support Agent"
AND Inv.CustomerId = Cu.CustomerId
AND Cu.SupportRepId = Emp.EmployeeId
GROUP BY RepName;

-- Which sales agent made the most in sales in 2009?
SELECT Emp.FirstName ||" "|| Emp.LastName AS RepName, 
SUM(Inv.Total) AS 'Total'
FROM Invoice Inv, Customer Cu, Employee Emp
WHERE Emp.Title = "Sales Support Agent"
AND Inv.CustomerId = Cu.CustomerId
AND Cu.SupportRepId = Emp.EmployeeId
AND Inv.InvoiceDate LIKE '2009%'
GROUP BY RepName;
ANSWER: Steve Johnson

-- Which sales agent made the most in sales in 2010?
Jane Peacock
-- Which sales agent made the most in sales over all?
Jane Peacock

-- Provide a query that shows the # of customers assigned to each sales agent.
SELECT Emp.FirstName ||" "|| Emp.LastName AS RepName,
COUNT(DISTINCT Cu.CustomerId) AS 'Total'
FROM Invoice Inv, Customer Cu, Employee Emp
WHERE Emp.Title = "Sales Support Agent"
AND Inv.CustomerId = Cu.CustomerId
AND Cu.SupportRepId = Emp.EmployeeId
GROUP BY RepName;

-- Provide a query that shows the total sales per country. Which country's customers spent the most?
SELECT BillingCountry AS 'Country', 
SUM(Total) AS 'Spending'
FROM Invoice
GROUP BY Country
ORDER BY Spending DESC;
ANSWER: USA

-- Provide a query that shows the most purchased track of 2013.
SELECT tr.Name AS 'Track', 
COUNT(*) AS 'PurchaseCount'
FROM Invoice inv, Track tr, InvoiceLine
WHERE inv.InvoiceId = InvoiceLine.InvoiceId
AND InvoiceLine.TrackId = tr.TrackId
AND inv.InvoiceDate LIKE '2013%'
GROUP BY Track
ORDER BY PurchaseCount DESC
LIMIT 1;

-- Provide a query that shows the top 5 most purchased tracks over all.
SELECT tr.Name AS 'Track', 
COUNT(*) AS 'PurchaseCount'
FROM Invoice inv, Track tr, InvoiceLine
WHERE inv.InvoiceId = InvoiceLine.InvoiceId
AND InvoiceLine.TrackId = tr.TrackId
GROUP BY Track ORDER BY PurchaseCount DESC
LIMIT 5;

-- Provide a query that shows the top 3 best selling artists.
SELECT ar.Name AS 'Artist', 
SUM(inv.Total) AS 'TotalSales'
FROM Invoice inv, Track tr, InvoiceLine, Artist ar, Album al
WHERE inv.InvoiceId = InvoiceLine.InvoiceId
AND InvoiceLine.TrackId = tr.TrackId
AND tr.AlbumId = al.AlbumId
AND al.ArtistId = ar.ArtistId
GROUP BY Artist ORDER BY TotalSales DESC
LIMIT 3;

-- Provide a query that shows the most purchased Media Type.
SELECT me.Name AS 'Media_type', 
SUM(inv.Total) AS 'TotalSales'
FROM Invoice inv, Track tr, InvoiceLine, MediaType me
WHERE inv.InvoiceId = InvoiceLine.InvoiceId
AND InvoiceLine.TrackId = tr.TrackId
AND tr.MediaTypeId = me.MediaTypeId
GROUP BY Media_type ORDER BY TotalSales DESC
LIMIT 1;

-- Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.
SELECT inv.InvoiceId AS 'Invoice', 
COUNT(*) AS 'Number of Tracks'
FROM Invoice inv, Track tr, InvoiceLine, Genre
WHERE inv.InvoiceId = InvoiceLine.InvoiceId
AND InvoiceLine.TrackId = tr.TrackId
AND tr.GenreId = Genre.GenreId
GROUP BY Invoice
HAVING(COUNT(DISTINCT Genre.GenreId) > 1);
