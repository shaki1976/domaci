import Countries from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import { main, btnNext, btnBack, btnPreview, header } from "./Constants.js";
import Country from "./components/Country.js";

let countries = [];
let filteredCountries = new Set();

function prepareButtons() {
  btnNext.textContent = "next";
  btnNext.id = "next";
  btnPreview.textContent = "preview";
  btnPreview.id = "preview";
  btnBack.textContent = "back";
  btnBack.id = "back";
  header.append(btnNext, btnPreview, btnBack);
}

const showCountries = (countries) => {
  if (countries.length != 1)
    while (filteredCountries.size < 15) {
      let randomIndex = Math.floor(Math.random() * countries.length);
      filteredCountries.add(countries[randomIndex]);
    }
  filteredCountries = Array.from(filteredCountries);

  return filteredCountries;
};

getAllCountries().then((res) => {
  countries = res.data;
  filteredCountries = showCountries(countries);
  console.log(filteredCountries);
  main.append(...Countries(filteredCountries, false));
  main.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.tagName);
    if (e.target.tagName == "IMG") {
      let i = e.target.closest("div").id;
      main.innerHTML = "";
      main.append(Country(filteredCountries[i], i, true));
      prepareButtons();

      btnNext.addEventListener("click", () => {
        if (i < filteredCountries.length - 1) {
          i = ++i;
          main.innerHTML = "";
          main.append(Country(filteredCountries[i], i, true));
        } else return;
      });

      btnPreview.addEventListener("click", () => {
        if (i > 0) {
          i = --i;
          main.innerHTML = "";
          main.append(Country(filteredCountries[i], i, true));
        } else return;
      });

      btnBack.addEventListener("click", () => {
        main.innerHTML = "";
        main.append(...Countries(filteredCountries, false));
      });
    }
  });
});
