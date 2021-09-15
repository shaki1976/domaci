import Countries from "./components/Countries.js";
import { getAllCountries } from "./service.js";
import Regions from "./components/Regions.js";
import { divSelect, main, searchInput } from "./Constants.js";
import Select from "./components/Select.js";

//Namerno sam stavio globalno da bih im pogao pristupati iz listenera za pretragu
//regioni bi radili i bez toga jer bih returnovao iz fje za sledece then
let countries = [];

const generateSelect = (arr, text) => {
  let options = Regions(arr);
  //   console.log(options);

  divSelect.innerHTML = "";
  let select = Select(options, text);
  select.addEventListener("change", () => {
    main.innerHTML = '';
    let tmp = arr.filter((country) => {
      if (select.value === "Nepoznato")
        return country.region.trim().toLowerCase() == "";
      return country.region.toLowerCase() === select.value.toLowerCase();
    });
    console.log(tmp);
    console.log(Countries(tmp, false));
    main.append(...Countries(tmp, false));
  
  });
  searchInput.innerHTML = '';
  divSelect.append(select);
};

getAllCountries()
  .then((res) => {
    countries = res.data;
    console.log(countries[0]);
    console.log(Countries(countries, false));
    main.append(...Countries(countries, false));
    // return countries;
  })
  .then(() => {
    // ovde sam mogao kao parametar da prihvatim countries iz fje prethodnog then
    // i to bi radilo
    generateSelect(countries, "Izaberite region");
  });

searchInput.addEventListener("input", () => {
  main.innerHTML = "";
  let filter = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  console.log(filter.length);
  if(filter.length === 1) main.append(...Countries(filter, true));
  else main.append(...Countries(filter, false));
  generateSelect(countries, "Izaberite region");
});
