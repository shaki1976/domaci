let count = 4;
const data = [
    {
        id: 1,
        desc: '12324',
        done: true
    },
    {
        id: 2,
        desc: 'nesto2 dsgsdgsdg 21231',
        done: false
    },
    {
        id: 3,
        desc: 'hhehe nesto 3 kdk',
        done: false
    },
    {
        id:4 ,
        desc: 'jklgjlskkllo',
        done: true
    },
]

//dodaje objekat item na listu
const add = (item) =>{ //Napomena: objekat item sadrzi samo desc i done {desc, done}
    item.id = ++count;
    data.push(item);
}