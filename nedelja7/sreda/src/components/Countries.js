import Country from "./Country.js"

const Countries = (countries, onlyOne)=> countries.map(country => Country(country, onlyOne) )

export default Countries
