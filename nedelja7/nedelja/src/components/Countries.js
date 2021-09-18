import Country from "./Country.js";

const Countries = (countries, onlyOne) =>
  countries.map((country, i) => Country(country, i, onlyOne));

export default Countries;
