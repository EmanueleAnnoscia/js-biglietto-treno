// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.Prima di scrivere il codice impostate il ragionamento nei commenti!Bonus:
// Applicare de controlli sull'input dell'utente

// RAGIONAMENTO

// Dati 
// -età
// -chilometri
// -prezzo
// -prezzo per kilometro
// -percentuali di sconto


// Per il Bonus 
// eseguire una verifica che permette di garantire che il numero inserito non sia una stringa come nome o un numero negativo
// in primo luogo ho pensato di inserire due altre variabili le quali eseguivano il check sulla variabile originale e divenivano loro stesse le nuove 
// variabili, tuttavia con le ricerche ho provato ad utilizzare il while per via del ragionamento di "è vero quando" e quindi di conseguenza facilitare il procedimento

// Esecuzione 
// dopo la inizializzazione delle variabili e il loro test ho inizializzato altre variabili le quali sono:
// la versione numerica intera per i chiloometri e l'età
// una variabile che una volta inizializzata doveva restituirmi il prezzo per kilometro così da trovare il totlae e successivamente
// le variabili di variazione prezzo in percentuale sull'età


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