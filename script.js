//OPPGAVER

//OPPGAVE.1, While loop
/*

1.Gå til linje utenfor kommentar og skriv av while loopen som er laget,
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:

2. Endre countdown til 10, se i console.log

3. Snu på loopen, skriv let coundown = 1, countdown < 5, og countdown++

KODE DERE SKAL KOPIERE:

let countdown = 5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log('Blast off!');

*/
/*Svare på oppgave 1 her. Gjorde 1.2 og 3*/ 
let countdown = 1;

while (countdown < 5) {
  console.log(`Countdown: ${countdown}`);
  countdown++;
}

console.log('Blast off!');

//OPPGAVE.2, For loop
/*

1.Gå til linje utenfor kommentar og skriv av for loopen, 
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:

2. Skift number til å ha en annen verdi
3. Lag et array og skift ut 10 med navn_på_array.length,
   og lag en ny string i console.log som console.log hvert element i array

Vi går igjennom koden når alle har skrevet ferdig


KODE DERE SKAL KOPIERE:

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

*/
/* Svare på oppgave 2 her. Skriv av og ikke kopier. (const fruit er for å lage din egen array)  */

const  number =5;
const fruit = ["eple", "mango"]

for(let i = 0; i < fruit.length; i++) {
  //console.log(`${number} x ${i} = ${number *i}`);
  let fruitString = "Dette er en frukt" + " "+ fruit[i]
  console.log(fruitString);

}
  

//OPPGAVE.3, forEach
/*

1.Gå til linje utenfor kommentar og skriv av forEach loopen, 
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:

2. legg til ekstra elementer i shoppinglisten
3. lag en ny array og skift ut shoppingList med den nye arrayen
4. for hver iterasjon lag en p og legg til element fra shoppinglist til p
5. lag et array av objects og loop igjennom et spesifikt key f.eks alle names i objectene


Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL KOPIERE:

let shoppingList = ['milk', 'bread', 'fish', 'egg'];

shoppingList.forEach((item) => {
  console.log(item);
});
*/
/*Svare på oppgave 3 her. gjorde 1 og 2. 3 og 4 senere*/

let shoppingList = ['milk', 'bread', 'fish', 'egg','banana','carrot'];
let colors = ['blue','red','green']
colors.forEach((item) => {
  console.log(item);
  
});

//OPPGAVE.4, map
/*

1.Gå til linje utenfor kommentar og skriv av map funksjonen som er laget,
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:

2. legg til flere numre i numbers array, 
endre nummeret 'number' multipliseres med,
skift ut multipliser med dele

3. lag en ny array med frukt, 
    map over array og legg til teksen 'er på salg' for hver frukt, 
    console.log det nye arrayet

Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL KOPIERE:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);


*/

/*

EKSTRA OPPGAVE:

Se over koden under,
Kommenter ut koden,
skriv kommentar for hver linje/del hvor du forklarer delen av koden gjør
*/

/*
const passengers = [
  {
    name: 'Frank',
    age: 32,
    city: 'San Fransico',
  },

  {
    name: 'Sara',
    age: 22,
    city: 'Miami',
  },

  {
    name: 'Sebastian',
    age: 32,
    city: 'Ohio',
  },
];

let nameList = [];

passengers.forEach((item) => {
  let names = item.name;
  let newNameHeader = document.createElement('h3');
  newNameHeader.textContent = names;
  document.body.appendChild(newNameHeader);
  nameList.push(names);
});

console.log(nameList);
*/
