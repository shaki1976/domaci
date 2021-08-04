/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.
*/

console.log("--------------------------------")
console.log('zadatak1:');

//Poslednji dan tokom kojeg se puz popne na drvo nisam delio na decimalu ili sate vec sam ostavio kao ceo dan
let visinaDrveta = 31;
let visinaPenjanja = 0;
const brzinaRasta = 1;
const brzinaPuza = 3;

let dani = 0;
while (visinaPenjanja < visinaDrveta) {
    dani++;
    visinaDrveta += brzinaRasta;
    visinaPenjanja += brzinaPuza;
    if (visinaPenjanja > visinaDrveta) visinaPenjanja = visinaDrveta; // da se puz ne bi popeo vislje nego sto je drvo naraslo
    console.log(`Dan ${dani}: Puz je presao ${visinaPenjanja}cm, visina drveta iznosi ${visinaDrveta}cm`);

}
console.log(`Puz se popeo na drvo za ${dani} dana`);




console.log("------------------------------------");
console.log("zadatak 2");
/*
2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

let dan;
let iznos;
let minIznos;

// ovde sam odradio samo osnovnu validaciju , inace bih je radio vec kroz tipove i atribute input elemenata kojih ovde nemam
// i za nisam obradio validaciju u slucaju 'cancel'

while(true){
    dan =prompt('Unesite dan u nedelji brojem 1=ponedeljak ... 7=nedelja');
    dan = parseInt(dan);
    if(dan >=1 && dan <= 7) break;
    else alert("Dan mora biti broj od 1 do 7!")
}
while (true){
    iznos = parseInt(prompt("Iznos kupovine: "));
    if(!isNaN(iznos))break;
    else alert("Iznos mora biti validan broj.");
}

// kod kupca mi nije potrebna validacija jer ako se pogresno unese pasce pod default u switch 
// inace bih kupca uradio sa <selection>
const kupac = prompt("Unesite kupca  (zaposlen,student, penzioner, firma, ostalo) ").toLowerCase();

let ukupanPopust = 0;
let procenatPopusta;
const dodatniPopust = 5;

switch (kupac) {
    case "zaposlen":
        procenatPopusta = 5;
        minIznos = 5000;
        break;
    case "student":
        procenatPopusta = 20;
        minIznos = 3000;
        break;
    case "penzioner":
        procenatPopusta = 30;
        minIznos = 2000;
        break;
    case "firma":
        procenatPopusta = 10;
        minIznos = 10000;
        break;
    default:
        procenatPopusta = 0;
        break;
}



/* sledeci deo je uradjen sa pretpostavkom da je vikendom 
samo dodatni popust za one koji ga imaju i radnim danima
a da ostali nemaju popust ni vikendom.
*/

let osnovniPopust = ((iznos/100) * procenatPopusta) ;

if(!minIznos || procenatPopusta == 0 || iznos < minIznos){
    console.log("Nemate pravo na popust.");
}else if(dan === 6 || dan === 7){
    ukupanPopust = osnovniPopust + ((iznos - osnovniPopust)/100) * dodatniPopust;
}else {
    ukupanPopust = osnovniPopust;
}

//ako nema pravo na popust stampa se 0 din jer je inicijalna vrednost 0
console.log(`Ukupan ostvareni popust je: ${ukupanPopust.toFixed(2)} din`);
