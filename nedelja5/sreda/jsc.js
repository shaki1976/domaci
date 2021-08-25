// Napisati validaciju za formu koja sadrzi polja:
// input-text(name, surname, password, passwordConfirm)
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!


let isValidate = true
const form = document.getElementById('forma')
const userReview = document.querySelector('.user-review')

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#surname')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#password-confirm')
const city = document.querySelector('#city')
const courses = document.querySelector('.checkbox-courses')
const female = document.getElementById('female')
const male = document.getElementById('male')


const html = document.getElementById('html')
const css = document.getElementById('css')
const javascript = document.getElementById('javascript')
const php = document.getElementById('php')

const firstNameError = document.querySelector('#name-error')
const lastNameError = document.querySelector('#surname-error')
const passwordError = document.querySelector('#password-error')
const confirmPasswordError = document.querySelector('#password-confirm-error')
const courseError = document.querySelector("#courses-error")
const cityError = document.getElementById('city-error')
const genderError = document.getElementById('gender-error')



function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}

function resetErrors(){
    firstNameError.textContent = ""
    lastNameError.textContent = ""
    courseError.textContent = ""
    cityError.textContent = ""
    confirmPasswordError.textContent = ""
    passwordError.textContent = ""
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (firstName.value.trim() == "") {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field is requierd"
        isValidate = false
    } else if (firstName.value.trim().length < 5) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must include minimum five character"
        isValidate = false
    } else if (firstName.value.trim().length >= 15) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must have less then fifteen characters"
        isValidate = false
    }

    if (lastName.value.trim() == "") {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field is requierd"
        isValidate = false
    } else if (lastName.value.length < 5) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field must include minimum five character"
        isValidate = false
    } else if (lastName.value.length >= 20) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field must have less then 20 characters"
        isValidate = false
    }

    let passValue = password.value.trim()
    if (passValue == "") {
        passwordError.textContent = ""
        passwordError.textContent = "This field is requierd"
        isValidate = false
    } else if (passValue.length < 8) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include minimum eight character"
        isValidate = false
    } else if (!stringHasNumber(passValue)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include number"
        isValidate = false
    } else if (!stringHasUpperCase(passValue)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include uppercase"
        isValidate = false
    }

    if (confirmpassword.value.trim() !== password.value.trim()) {
        confirmPasswordError.textContent = ""
        confirmPasswordError.textContent = "Has to be same as password"
        isValidate = false
    }

    if (!(city.value == "ns" || city.value == "bg" || city.value == "ni" || city.value == "su")) {
        cityError.textContent = ""
        cityError.textContent = "You need to chose somthing"
        isValidate = false
    }

    // if (!html.checked || !css.checked || !javascript.checked || !php.checked)
    if (html.value != 'html' || css.value != 'css' || javascript.value!= 'javascript' || php.value != 'php') {
        courseError.textContent = ""
        courseError.textContent = "You need to chose somthing"
        isValidate = false
    }



    if (isValidate) {

        resetErrors()
        let user = {
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            usr_password: password.value.trim(),
            usr_city: city.value,
            usr_course: course.value
        }

        userReview.textContent += "Name: " + user.first_name
        userReview.textContent += "Surname: " + user.last_name
        userReview.textContent += "Couse: " + user.usr_coure

    }
})