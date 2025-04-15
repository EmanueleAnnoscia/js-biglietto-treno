

let kmNumber ;

while (true) {
    const km = prompt("Inserisci qui i chilometri da percorrere");
    kmNumber= parseInt(km);

    if (!isNaN(kmNumber) && kmNumber > 0) {
        break; // dovrebbe uscire dal loop se il numero è positivo
    }

    alert("Valore non valido per i chilometri. Inserisci un numero positivo.");
}

// let kmcheck= parseInt(kmcheck); primo

// if (km <0){
//     console.log("valore errato");                            
//     kmcheck= prompt("inserisci nuovamente i chilometri da percorrere")
// }

let userAgeNumber ;

while (true) {
    const userAge = prompt("Inserisci qui la tua età");
    userAgeNumber= parseInt(userAge);

    if (!isNaN(userAgeNumber) && userAgeNumber > 0 && userAgeNumber < 150) {
        break;
    }

    alert("Valore non valido per l’età. Inserisci un numero positivo.");
}

// const kmNumber= parseInt(km);
// debug
// console.log(kmNumber);
// const userAgeNumber= parseInt(userAge);
// debug
// console.log(userAgeNumber);


const priceOnKm= 0.21;

const kmPrice= kmNumber * priceOnKm;
// debug
// console.log(kmPrice); 

let finalPrice ;
const minorPercent= (20/100);
const oldPercent= (40/100); 

if (userAgeNumber < 18){
    finalPrice= kmPrice -(kmPrice* minorPercent);
}else if (userAgeNumber >= 18 && userAgeNumber < 65){
    finalPrice= kmPrice;
}else if(userAgeNumber >= 65 && userAgeNumber < 150){
    finalPrice= kmPrice -(kmPrice* oldPercent);
}

console.log(`il prezzo finale del tuo biglietto è di € ${finalPrice.toFixed(2)}`);