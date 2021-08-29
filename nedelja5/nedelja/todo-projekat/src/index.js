import { data } from "./service.js";
import { add as addItemToData, deleteById, changeById } from "./service.js";

// kreiranje  dom elemenata iz html-a koji su mi potrebni globalno
const activeProjectsSection = document.getElementById("active-projects");
const activeUl = document.getElementById("active-ul");

const finishedProjectsSection = document.getElementById("finished-projects");
const finishedUl = document.getElementById("finished-ul");

const form = document.querySelector("form");

// kreiranje niza aktivnih i niza uradjenih todo koji
// ce mi verovatno olaksati prebacivanje elemenata
// const nizAktivnih = []; //ostavicu da data bude niz aktivnih
const nizUradjenih = [];

class Item {
  constructor(name, desc, napomena, done = false) {
    // this.id = id;
    this.name = name;
    this.desc = desc;
    this.napomena = napomena;
    this.done = done;
  }

  // fja za renderovanje novog todo
  static itemRendering(item) {
    const li = document.createElement("li");
    li.id = item.id;
    li.dataset.napomena = item.napomena;
    li.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = item.name;

    const p = document.createElement("p");
    p.textContent = item.desc;

    const moreInfoBtn = document.createElement("button");
    moreInfoBtn.className = "alt";
    moreInfoBtn.textContent = "More Info";

    const activateBtn = document.createElement("button");
    activateBtn.textContent = "Activate";

    const finishBtn = document.createElement("button");
    finishBtn.textContent = "Finish";

    li.append(h2, p, moreInfoBtn);

    if (!item.done) {
      li.append(finishBtn);
      activeUl.append(li);
    } else {
      li.append(activateBtn);
      finishedUl.append(li);
    }
  }
}

// renderovanje postojecih todo iz data niza
function renderovanjePostojecih(nizObjekata) {
  nizObjekata.forEach((item) => Item.itemRendering(item));
}
renderovanjePostojecih(data);

//fja za rukovanje submit dogadjajem
function itemAddingHandler(ev) {
  ev.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const napomenaInput = document.getElementById("napomenaInput");

  const item = new Item(
    nameInput.value,
    descriptionInput.value,
    napomenaInput.value
  );
  addItemToData(item);
  Item.itemRendering(item);

  nameInput.value = "";
  descriptionInput.value = "";
  napomenaInput.value = "";

  console.log(data);
}

form.addEventListener("submit", (event) => {
  itemAddingHandler(event);
});
