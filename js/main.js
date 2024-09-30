/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e 
l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
 */

//chiedere all'utente il numero di km e l'età del passeggero
//crea variabile numKm age e price
let numKm = prompt("Inserire il numero di km da percorrere")
let age = prompt("Inserisci la tua età");
let price; //num km * (prezzo - sconto età)

console.log(numKm);
console.log(age);




//se minorenne -20%
if (age <= 17){
   
}
//se over 65 - 40%
else if (age >= 65){

}
//calcola il totale del prezzo in base ai km (0.21€ al km)


