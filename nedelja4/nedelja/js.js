/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 *
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */

// 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
const body = document.body;
const nazivFilma = document.getElementById("nazivFilma");
const ocena = document.getElementById("ocena");
const btnPotvrdi = document.getElementById("potvrdi1");
const inputWrappperDiv = document.getElementById("input-wrapper");
const p1 = document.createElement("p");
p1.textContent = "ocena mora biti broj od 1 do 10";

function dodajRed() {
  // ukoliko je ocena van granica dodam paragraf sa uupozorenjem i obrisem unos u inputu
  if (Number(ocena.value) < ocena.min || Number(ocena.value) > ocena.max) {
    ocena.value = "";
    inputWrappperDiv.lastElementChild.after(p1);
    return;
  }

  p1.remove(); // kada je uneta validna ocena uklonim paragraf
  const tabela = document.querySelector("table");
  const tableHead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${nazivFilma.value}</td> 
  <td>${ocena.value}</td>`;

  tbody.append(tr);
  nazivFilma.value = "";
  ocena.value = "";
}

btnPotvrdi.addEventListener("click", dodajRed);

//2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja
// i zbir ispisati na ekranu. HTML kreirati proizvoljno.
//3. Nadovezivanje na predhodni zadatak.
//Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.

const zadatak2WrapperDiv = document.getElementById("zad2-wrapper");
const sabirciWrapperDiv = document.getElementById("sabirciWrapper");
const sabirak1 = document.getElementById("sabirak1");
const sabirak2 = document.getElementById("sabirak2");
const btnSaberi = document.getElementById("saberi");

const prikazRezultata = document.getElementById("rezultat");
const checkboxWrapperDiv = document.getElementById("checkboxWrapper");
const checkboxPrikazi = document.getElementById("prikazi");

function saberi(a, b) {
  return a + b;
}

function renderujZbir() {
  let zbir = saberi(Number(sabirak1.value), Number(sabirak2.value));
  prikazRezultata.textContent += ` ${zbir}`;
}

btnSaberi.addEventListener("click", renderujZbir);
checkboxPrikazi.addEventListener("change", () => {
  if (!checkboxPrikazi.checked) sabirciWrapperDiv.remove();
  else {
    zadatak2WrapperDiv.prepend(sabirciWrapperDiv);
  }
});

//ovde nije trazeno dugme za reset pa ga nisam ni dodavao
