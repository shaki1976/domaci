let count = 4;
export const data = [
  {
    id: 1,
    name: "uzina-poneti",
    desc: "poneti uzinu",
    napomena: "ostaces gladan",
    done: true,
  },
  {
    id: 2,
    name: "voce",
    desc: "kupiti voce",
    napomena: "zdravo",
    done: true,
  },
  {
    id: 3,
    name: "sastanak",
    desc: "u pola dva , obavezno prisustvo",
    napomena: "obavezno",
    done: false,
  },
  {
    id: 4,
    name: "uzina-jelo",
    desc: "pojesti uzinu",
    napomena: "nemoj biti gladan",
    done: false,
  },
];

//dodaje objekat item na listu
const add = (item) => {
  //Napomena: objekat item sadrzi samo desc i done {desc, done}
  // item.id = ++count;
  data.push({ id: ++count, ...item });
  return count;
};

const deleteById = (id) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
};

const changeById = (id, newItem) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1, newItem);
};

export { add, deleteById, changeById };
