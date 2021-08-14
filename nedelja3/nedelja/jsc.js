//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
console.log("---------------------------- zad 1");
{
  let arr = [2, 5, 14, 20, 25, 33, 15];
  function deljiviSa5(niz) {
    let deljivi = niz.filter((el) => el % 5 === 0);
    return console.log(deljivi.join(", "));
  }

  deljiviSa5(arr);
}
console.log("-------------------------------------- zad 2");
//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)
// pokusacu preko konstruktorske fje, ne da bih se pravio vazan, nego ucenja radi

function Pokemon(ime, vrsta, sposobnosti, karakteristike) {
  this.ime = ime;
  this.vrsta = vrsta;
  this.sposobnosti = sposobnosti;
  this.karakteristike = karakteristike;

  this.zbirKarakteristika = function () {
    return (
      this.karakteristike.napad +
      this.karakteristike.odbrana +
      this.karakteristike.brzina
    );
  };
}

function Karakteristike(napad, odbrana, brzina) {
  this.napad = napad;
  this.odbrana = odbrana;
  this.brzina = brzina;
}

let Charizard = new Pokemon(
  "Charizard",
  "vatreni",
  ["vatra", "letenje"],
  new Karakteristike(50, 50, 70)
);

let Venusaur = new Pokemon(
  "Venusaur",
  "seme",
  ["velicina", "trava", "otrov"],
  new Karakteristike(60, 50, 40)
);
let Pikachu = new Pokemon(
  "Pikachu",
  "Elektricni",
  ["staticki elektricitet"],
  new Karakteristike(40, 30, 90)
);
let Sandshrew = new Pokemon(
  "Sandshrew",
  "mis",
  ["veo peska", "kupanje"],
  new Karakteristike(60, 50, 30)
);

let pokemoni = [Charizard, Venusaur, Pikachu, Sandshrew];

console.log(pokemoni);
console.log("-------------------------------------- zad 3");
//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona
function nizSposobnosti(pokemoni) {
  let nizSposobnosti = [];
  pokemoni.forEach((pokemon) => {
    let sposobnosti = pokemon["sposobnosti"];
    for (const sposobnost of sposobnosti) {
      nizSposobnosti.push(sposobnost);
    }
  });
  return nizSposobnosti;
}

console.log(nizSposobnosti(pokemoni));
// console.log(Pikachu.pojedinacneSposobnosti());

console.log("-------------------------------------- zad 4");
//4. Sortirati pokemone po brzini, rastuće.

function sortirajPoBrzini(pokemoni) {
  pokemoni.sort((a, b) =>
    a.karakteristike.brzina > b.karakteristike.brzina
      ? 1
      : b.karakteristike.brzina > a.karakteristike.brzina
      ? -1
      : 0
  );
}
sortirajPoBrzini(pokemoni);
console.log(pokemoni);

console.log("-------------------------------------- zad 5");
//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

function poJaciniNapada(niz) {
  // pokusao sam da do resenja dodjem i pomocu filter i reduce ali dosad nisam uspeo, trenutno mi samo ovo radi
  let pobednik = niz[0];
  // u slucaju da dva pokemona imaju isti napad pobednik je onaj koji ima veci zbir svih karakteristika
  for (const pokemon of niz) {
    zbirKarakteristika =
      pokemon.karakteristike.napad +
      pokemon.karakteristike.odbrana +
      pokemon.karakteristike.brzina;
    if (pokemon.karakteristike.napad > pobednik.karakteristike.napad)
      pobednik = pokemon;
    else if (
      pokemon.karakteristike.napad === pobednik.karakteristike.napad &&
      pokemon.zbirKarakteristika() > pobednik.zbirKarakteristika()
    )
      pobednik = pokemon;
  }
  return pobednik;
}

console.log(poJaciniNapada(pokemoni));
