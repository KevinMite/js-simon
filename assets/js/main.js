// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// primo numero casuale 
function numRandom(){
    return Math.floor(Math.random() * 100) + 1
}
let randomNumbers = []

while( randomNumbers.length < 5){
    let random = numRandom()

    if( !randomNumbers.includes(numRandom) ){
        randomNumbers.push( random )
    }
}
console.log(randomNumbers)


// Mostriamo il numero del array 

for(let i = 0; i < randomNumbers.length; i++){
    document.getElementById('numeri-random').innerHTML += `<li>${randomNumbers[i]}</li>`

}

setTimeout( function(){
    document.getElementById('numeri-random').innerHTML = ''
}, 2000 )


setTimeout( function(){

    let numeriUtente = []

    while(numeriUtente.length < 5){
        let singoloNumero = parseInt(prompt("inserisci il numero")) 

        if(!numeriUtente.includes(singoloNumero)){
            numeriUtente.push(singoloNumero)
        }

    }

    console.log(numeriUtente)


    let indovinati = []

    for(let k = 0; k < numeriUtente.length; k++ ){

        if( randomNumbers.includes(numeriUtente[k])){
            indovinati.push( numeriUtente [ k ] )

        }
    }

    document.getElementById('risultato').innerHTML = `hai indovinato ${indovinati.length} e sono: ${indovinati}`



}, 3000 )

