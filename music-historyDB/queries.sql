-- Query all of the entries in the Genre table
SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist VALUES (null, "9th Wonder", "2002") 
INSERT INTO genre VALUES (null, "Hip-Hop")

-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT INTO Album VALUES (null,"Tutankhamen","2012",3625,"Jamla Records",31,16)

-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO Song VALUES (null,"SomeplaceToGo!!!",228,"2012",16,31,29)
INSERT INTO Song VALUES (null,"The Marvel!!!",173,"2012",16,31,29)

-- Write a SELECT query that provides the song/album title, artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album, artist you added.
SELECT Song.Title 'Song', Album.Title 'Album', Artist.ArtistName 'Artist' 
FROM Song
LEFT JOIN Album ON Song.AlbumId = Album.AlbumId
LEFT JOIN Artist ON Song.ArtistId = Artist.ArtistId
WHERE Artist.ArtistName = "9th Wonder"

-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT Album.Title, COUNT(Song.AlbumId) FROM Album, Song
WHERE Song.AlbumId = Album.AlbumId
GROUP BY Album.Title

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT ar.ArtistName 'Artist', COUNT(s.ArtistId) 'Song Count'
FROM Artist ar, Song s
WHERE s.ArtistId = ar.ArtistId GROUP BY ar.ArtistName

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT g.Label 'Genre', COUNT(s.GenreId) 'Song Count'
FROM Genre g, Song s
WHERE s.GenreId = g.GenreId
GROUP BY g.GenreId

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT a.Title 'Album', MAX(a.AlbumLength) 'Duration'
FROM Album a

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
SELECT s.Title 'Song', MAX(s.SongLength) 'Duration'
FROM Song s

-- Modify the previous query to also display the title of the album.
SELECT s.Title 'Song', MAX(s.SongLength) 'Duration', a.Title 'Album'
FROM Song s, Album a
WHERE s.AlbumId = a.AlbumId
