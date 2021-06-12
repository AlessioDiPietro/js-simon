// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



var simonDice = [];
console.log(simonDice);

var numeriUtente = [];
console.log(numeriUtente);

var numeriComuni = [];
console.log(numeriComuni);








document.getElementById("avvio").addEventListener("click", function(){
    
    // Un alert() espone 5 numeri generati casualmente.
    
    for (i=0;i<5;i++){
        var numeroRand = Math.floor(Math.random()*99)+1;
        if (!simonDice.includes(numeroRand) || !numeroRand);
        simonDice.push(numeroRand);
    }
    alert("SIMON\'S DICE: " + simonDice);
    
    
    // Da li parte un timer di 30 secondi.
    setTimeout(inserimentoNumUtente, 3*1000);
    
    
    //* funzioni
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    
    

    
    function inserimentoNumUtente() {
        for (i=0;i<5;i++){
            
            var numeroScelto = parseInt(prompt("inserisci un numero da 1 a 100"));
            
            if (numeroScelto === simonDice[i]) {
                numeriComuni.push(numeroScelto);
            }
           
            if (!numeriUtente.includes(numeroScelto) && numeroScelto > 1 && numeroScelto < 100){
                numeriUtente.push(numeroScelto);
            }else {
                alert ("numero già inserito o non valido!");
            }

            
        }
        return numeroScelto;
    }
    

});

  