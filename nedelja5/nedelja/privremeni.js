// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci da je item uradjen).


// const inputTxt = document.querySelector('#input-text')
// const forma = document.querySelector('#forma')
// const divLista = document.querySelector('#lista')

// let todos = []
// let count = 0

// forma.addEventListener('submit',(event)=>{
//     event.preventDefault()

//     let item =  {id:count++ ,text:inputTxt.value}
//     todos.push(item)
//     console.log(todos);

//     const divItem = document.createElement('div')
//     divItem.classList.add('item')

//     const pText = document.createElement('p')
//     pText.textContent = inputTxt.value

//     const btnDel = document.createElement('button')
//     btnDel.textContent = 'X'
    
//     btnDel.addEventListener('click',()=>{
//         divItem.remove()

//         let index = todos.findIndex(todo=>todo.id == item.id )
//         todos.splice(index,1)

//         console.log(todos);
//     })

//     divItem.append(pText,btnDel)  
//     divLista.append(divItem)
    
//     inputTxt.value = ''
// })