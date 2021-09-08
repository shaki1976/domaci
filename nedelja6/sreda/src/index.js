class Kupac {
  constructor(ime, sifra, isAdmin) {
    this.ime = ime;
    this.sifra = sifra;
    this.korpa = [];
    this.isAdmin = isAdmin;
  }
}

class Proizvod {
  static #id = 0;
  constructor(naziv, cena, dostupnaKolicina) {
    this.id = Proizvod.#id;
    this.naziv = naziv;
    this.cena = cena;
    this.dostupnaKolicina = dostupnaKolicina;
    Proizvod.#id++;
  }

  ispisiProizvod() {
    const divProizvod = document.createElement("div");
    divProizvod.className = "proizvod";
    const pNaziv = document.createElement("p");
    pNaziv.textContent = `Naziv: ${this.naziv}`;
    const pCena = document.createElement("p");
    pCena.textContent = `Cena: ${this.cena}din`;
    const inputKolicina = document.createElement("input");
    inputKolicina.type = "number";
    inputKolicina.id = "kolicina";
    const btnDodaj = document.createElement("button");
    btnDodaj.textContent = "Dodaj u korpu";
    divProizvod.append(pNaziv, pCena, inputKolicina, btnDodaj);
    // divProizvod.style.border = "solid 1px black";
    return divProizvod;
  }

  dodajUKorpu(proizvod) {}
}

class PrehrambeniProizvod extends Proizvod {
  constructor(naziv, cena, dostupnaKolicina, rokTrajanja) {
    super(naziv, cena, dostupnaKolicina);
    this.rokTrajanja = rokTrajanja;
  }
  ispisiProizvod() {
    const divProizvod = super.ispisiProizvod();
    const pRokTrajanja = document.createElement("p");
    pRokTrajanja.textContent = `Rok trajanja: ${this.rokTrajanja}`;
    divProizvod.lastElementChild.before(pRokTrajanja);
    return divProizvod;
  }
}

class BelaTehnika extends Proizvod {
  constructor(naziv, cena, dostupnaKolicina, garancija) {
    super(naziv, cena, dostupnaKolicina);
    this.garancija = garancija;
  }

  ispisiProizvod() {
    const divProizvod = super.ispisiProizvod();
    const pGarancija = document.createElement("p");
    pGarancija.textContent = `Rok trajanja: ${this.garancija}`;
    divProizvod.lastElementChild.before(pGarancija);
    return divProizvod;
  }
}

class Proizvodi {
  static #proizvodi = [];
  static addProizvod(proizvod) {
    if (!(proizvod instanceof Proizvod)) return;
    Proizvodi.#proizvodi.push(proizvod);
  }
  //  static get proizvod() {
  //       return Proizvodi.#proizvodi[id];
  //   }

  static removeProizvod(id) {
    let index = Proizvodi.#proizvodi.findIndex((el) => el.id == id);
    Proizvodi.#proizvodi.splice(index, 1);
  }

  static renderProizvodi() {
    const divProizvodi = document.querySelector(".proizvodi");
    this.#proizvodi.forEach((proizvod) => {
      divProizvodi.append(proizvod.ispisiProizvod());
    });
  }
}

// kreiranje proizvoda
let mleko = new PrehrambeniProizvod("mleko", 90, 160, "26.09.2021");
let mlekoveliko = new PrehrambeniProizvod("mleko1.5", 119, 120, "24.09.2021");
let frizider = new BelaTehnika("frizider", 32000, 4, 60);
let pecenica = new PrehrambeniProizvod("pecenica", 1100, 5, "02.10.2021.");
let mikrotalasna = new BelaTehnika("mikrotalasna", 12300, 17, 24);

//dodavanje proizvoda u niz
Proizvodi.addProizvod(mleko);
Proizvodi.addProizvod(mlekoveliko);
Proizvodi.addProizvod(frizider);
Proizvodi.addProizvod(pecenica);
Proizvodi.addProizvod(mikrotalasna);

//renderovanje svih proizvoda iz niza
Proizvodi.renderProizvodi();

// class Kupac {
//   constructor(ime, sifra, isAdmin) {
//     this.ime = ime;
//     this.sifra = sifra;
//     this.korpa = [];
//     this.isAdmin = isAdmin;
//   }
// }

//kreiranje korisnika
let marina = new Kupac("Marina", "12345", false);
let sasa = new Kupac("Sasa", "654321", true);
let jovana = new Kupac("Jovana", "123", false);
let nemanja = new Kupac("Nemanja", "321", false);

const korisnici = [marina, sasa, jovana, nemanja];

const body = document.body;

const forma = document.getElementById("forma");
forma.addEventListener("submit", (ev) => {
  ev.preventDefault();
  logovanje();
});

function logovanje() {
  const inputUsername = document.getElementById("username");
  const inputPassword = document.getElementById("password");
  const username = inputUsername.value.trim();
  const password = inputPassword.value.trim();

  const kupac = korisnici.find((kupac, i, korisnici) => {
    return kupac.ime === username && kupac.sifra === password;
  });

  if (!kupac) return;

  const h3Korpa = document.createElement("h3");
  h3Korpa.innerHTML = `Vasa korpa : <span>${kupac.ime}</span>`;
  body.firstElementChild.after(h3Korpa);
  divKorpa = document.createElement("div");
  divKorpa.className = "korpa";
  body.h3Korpa.after(divKorpa);
  // const divProizvod = document.createElement("div");
  // divProizvod.className = "proizvod";
  // const pNaziv = document.createElement("p");
  // pNaziv.textContent = `Naziv: ${kupac.naziv}`;
  // const pCena = document.createElement("p");
  // pCena.textContent = `Cena: ${this.cena}din`;
}
