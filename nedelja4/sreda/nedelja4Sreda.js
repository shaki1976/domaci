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

//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob),
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.

const body = document.body;
const btnIzaberiPokemona = document.getElementById("pokemon");
const btnIzaberiProtivnika = document.getElementById("protivnik");

// kreiranje wrappera i dugmadi sa nazivima pokemona
const wrapperDiv = document.createElement("div");
wrapperDiv.id = "wrapper";
wrapperDiv.classList.add("hidden");

const pokemonButtons = [];
for (let i = 0; i < pokemoni.length; i++) {
  const button = document.createElement("button");
  button.id = pokemoni[i].ime.toLowerCase();
  button.textContent = pokemoni[i].ime;
  wrapperDiv.append(button);
  pokemonButtons.push(button);
}
console.log(pokemonButtons);

body.append(wrapperDiv);

//  kreiranje prikaza pokemona
const izabraniPokemonDiv = document.createElement("div");
izabraniPokemonDiv.classList.add("hidden");
izabraniPokemonDiv.id = "izabrani-pokemon";

const ul = document.createElement("ul");
izabraniPokemonDiv.append(ul);

body.append(izabraniPokemonDiv);

function prikaziIzabranogPokemona(pokemonIme) {
  let pokemon = pokemoni.find(
    (pokemon) => pokemon.ime.toLowerCase() == pokemonIme
  );
  Object.keys(pokemon).forEach((key) => {
    const li = document.createElement("li");
    li.id = key;
    if (key.toLocaleLowerCase() == "karakteristike") {
      let dodatak = "";
      for (const el in pokemon[key]) {
        dodatak += pokemon[key][el];
      }
      li.textContent = key + ": " + dodatak;
    }
    li.textContent = key + ": " + pokemon[key];
    ul.append(li);
  });
}

// const raspoloziviPokemoni = [...pokemoni]; // pravim kopiju niza pokemoni kako bih izbacio vec izabranog pokemona iz izbora za protivnika

function toggleVisibility() {
  this.classList.toggle("visible");
  this.classList.toggle("hidden");
}

//postavljanje slusaca na izaberi pokemona
btnIzaberiPokemona.addEventListener("click", toggleVisibility.bind(wrapperDiv));

wrapperDiv.addEventListener("click", (e) => {
  prikaziIzabranogPokemona(e.target.id);
  toggleVisibility.call(izabraniPokemonDiv);
});
