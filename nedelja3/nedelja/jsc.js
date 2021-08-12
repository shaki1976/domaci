//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

{
  let arr = [2, 5, 14, 20, 25, 33, 15];
  function deljiviSa5(niz) {
    let deljivi = niz.filter((el) => el % 5 === 0);
    return console.log(deljivi.join(", "));
  }

  deljiviSa5(arr);
}

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

function Pokemon(ime, vrsta, sposobnosti, karakteristike) {
  this.ime = ime;
  this.vrsta = vrsta;
  this.sposobnosti = sposobnosti;
  this.karakteristike = karakteristike;

  this.pojedinacneSposobnosti = function () {
    return this.sposobnosti.join(",");
  };
}

function Karakteristike(napad, odbrana, brzina) {
  this.napad = napad;
  this.odbrana = odbrana;
  this.brzina = brzina;
}

let Pikachu = new Pokemon(
  "Pikachu",
  "Elektricni",
  ["staticki elektricitet"],
  new Karakteristike(40, 30, 60)
);

let Charizard = new Pokemon(
  "Charizard",
  "vatreni",
  ["vatra", "letenje"],
  new Karakteristike(50, 50, 60)
);

let Venusaur = new Pokemon(
  "Venusaur",
  "seme",
  ["velicina", "trava", "otrov"],
  new Karakteristike(50, 50, 50)
);

let Sandshrew = new Pokemon(
  "Sandshrew",
  "mis",
  ["veo peska", "kupanje"],
  new Karakteristike(50, 50, 30)
);

let pokemoni = [Pikachu, Charizard, Venusaur, Sandshrew];

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona
function nizSposobnosti(pokemoni) {
  let nizSposobnosti = [];
  for (const pokemon in pokemoni) {
    console.log(pokemon);
    // nizSposobnosti.push(
    //   pokemon.pojedinacneSposobnosti().bind(pokemon).split(","));
  }
}
nizSposobnosti(pokemoni);
// console.log(Pikachu.pojedinacneSposobnosti());
