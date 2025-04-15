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
