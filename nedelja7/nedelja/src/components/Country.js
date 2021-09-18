const Country = (country, i, onlyOne) => {
  const divCountry = document.createElement("div");
  divCountry.id = i;

  const p = document.createElement("p");
  p.textContent = country.name;

  const allLanguagesP = document.createElement("p");
  let text1 = "Languages: ";

  const timeZonesP = document.createElement("p");
  let text2 = "Time zones: ";

  country.languages.forEach((language) => {
    text1 += language.name + " ";
  });
  country.timezones.forEach((timezone) => {
    text2 += timezone + " ";
  });

  allLanguagesP.textContent = text1;
  timeZonesP.textContent = text2;

  const populationP = document.createElement("p");
  populationP.textContent = `Population: ${country.population}`;

  const capitalP = document.createElement("p");
  capitalP.textContent = `Capital: ${country.capital}`;

  const domenP = document.createElement("p");
  domenP.textContent = `Domain: ${country.topLevelDomain}`;

  const img = document.createElement("img");
  img.src = country.flag;
  img.alt = `Flag of ${country.name}`;
  if (onlyOne) {
    divCountry.append(
      p,
      allLanguagesP,
      timeZonesP,
      populationP,
      capitalP,
      img
      // document.createElement("hr")
    );
  } else divCountry.append(p, img, capitalP, document.createElement("hr"));

  return divCountry;
};

export default Country;
