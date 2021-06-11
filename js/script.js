// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Un alert() espone 5 numeri generati casualmente.
document.getElementById("avvio").addEventListener("click", function(){

    var simonDice = [];
    
    for (i=0;i<5;i++){
        var numeroRand = Math.floor(Math.random()*99)+1;
        simonDice.push(numeroRand);
    }
    alert(simonDice);

})
