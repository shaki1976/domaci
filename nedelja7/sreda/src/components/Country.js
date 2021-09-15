
const Country = (country, onlyOne)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const nativeP = document.createElement('p')
    nativeP.textContent = country.nativeName;

    const populationP = document.createElement('p')
    populationP.textContent = `Population: ${country.population}`

    const capitalP = document.createElement('p')
    capitalP.textContent = `Capital: ${country.capital}`

    const domenP = document.createElement('p')
    domenP.textContent = `Domain: ${country.topLevelDomain}`

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

if(onlyOne) {
    divCountry.append(p, nativeP, populationP, capitalP, domenP, img,document.createElement('hr'))
}else divCountry.append(p,img,document.createElement('hr'))

    return divCountry
}

export default Country