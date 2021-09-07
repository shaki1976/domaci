class Kupac {
    constructor(ime, sifra, korpa, isAdmin) {
        this.ime = ime;
        this.sifra = sifra;
        this.korpa = korpa;
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

    ispisiProizvod(proizvod){
 const proizvodDiv 
    }

}

class PrehrambeniProizvod extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, rokTrajanja) {
        super(naziv, cena, dostupnaKolicina);
        this.rokTrajanja = rokTrajanja;
    }
}

class BelaTehnika extends Proizvod {
    constructor(naziv, cena, dostupnaKolicina, garancija) {
        super(naziv, cena, dostupnaKolicina);
        this.garancija = garancija;
    }
}

class Proizvodi {
  static  #proizvodi = [];
 static addProizvod(proizvod){
     if(!(proizvod instanceof Proizvod)) return;
     Proizvodi.#proizvodi.push(proizvod);
  }
 static get proizvod(id) {
      return Proizvodi.#proizvodi[id];
  }

  static removeProizvod(id){
      let index = Proizvodi.#proizvodi.findIndex((el) => el.id == id);
      Proizvodi.#proizvodi.splice(index, 1)
  }
}




let mleko = new PrehrambeniProizvod("mleko", 90, 160, "26.09.2021");
let mlekoveliko = new PrehrambeniProizvod("mleko1.5", 119, 120, "24.09.2021");
let frizider = new BelaTehnika('frizider', 32000, 4, 60);
let pecenica = new PrehrambeniProizvod('pecenica', 1100 , 5, '02.10.2021.');
let mikrotalasna = new BelaTehnika('mikrotalasna', 12300, 17, 24)

