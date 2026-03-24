//Consegna:
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Creamo un ciclo che stampi numeri da 1 a 100.
for (let i = 1; i < 101; i++) {

    //calcolo con operatore di modulo tutti i multipli di 3 e di 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    }

    //calcolo con operatore di modulo tutti i multipli di 3
    else if (i % 3 === 0) {
        console.log('fizz')
    }

    //calcolo con operatore di modulo tutti i multipli di 5
    else if (i % 5 === 0) {
        console.log('Buzz')
    }

    //tutti gli atri numeri non multipli ne di 3 ne di 5 verranno stampati normalmente
    else {
        console.log(i)
    }
}


