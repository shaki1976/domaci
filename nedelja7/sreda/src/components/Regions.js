// import Country from "./Country.js";
// import Countries from "./Countries.js";

const Regions = (countries) =>
  new Set(
    countries.map((country) => {
      if (!country.region) return "Nepoznato";
      return country.region;
    })
  );

export default Regions;
