//get names from user input
const firstName = process.argv[2];
const lastName = process.argv[3];
//create person with object literal shorthand
const person = { firstName, lastName };

const cheer = ({firstName, lastName}) => {
   
   let capsName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
   let letters = [...capsName.replace(/\s/g, '')];

   for(let [index,letter] of letters.entries()){
      setTimeout(function () {
         if (letter == 'A'||letter == 'E'||letter == 'F'||letter == 'H'||letter == 'I'||letter == 'L'||letter == 'O'||letter == 'M'||letter == 'R'||letter == 'S'||letter == 'X'){
            console.log(`Give me an ${letter}!\n`);
         } else {
            console.log(`Give me a ${letter}!\n`);
         }
      }, index * 1000);
   }

   setTimeout(() => {
      console.log(`What does that spell?\n`);
   }, letters.length * 1000);
   setTimeout(() => {
      console.log(`${capsName}!\n`);
   }, (letters.length + 1) * 1000);
}

cheer(person);




