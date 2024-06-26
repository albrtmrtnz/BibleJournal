// const input = document.querySelector('button');
// let newScripture = document.querySelector('#scripture');
// let list = document.querySelector('ol.list');

// function addScripture() {
//     let newLi = document.createElement('li');
//     newLi.innerText = newScripture.value;
//     list.append(newLi);
//     // list.classList.add('list');
// }

// input.addEventListener('click', function (e) {
//     e.preventDefault();
//     addScripture();
//     newScripture.value = '';
//     list.classList.add('list');
// })


// addEventListener("keypress", function (event)
//  { if (event.keyCode == 13) { // enter pressed } })

// app.use((req, res) => {
//     res.send("<h1>This is my webpage!</h1>")
// });

const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

let scriptures = require('./seeds/starter.js');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);




app.get('/journal', (req, res) => {
    res.render('journal/index', { scriptures })
})
// i kept getting scriptures is not defined because i was just rendering the view and
// forgot to add in { scriptures } to the res.render.. so i did not have acces to the 
// scriptures array

app.get('/journal/new', (req, res) => {
    res.render('journal/new')
})

app.post('/journal', (req, res) => {
    const { scripture } = req.body;
    scriptures.push({ scripture, id: uuid() });
    res.redirect('/journal')
})

app.get('/journal/:id', (req, res) => {
    const { id } = req.params;
    const scripture = scriptures.find(s => s.id === id);
    res.render('journal/info', { scripture })
})
// this edit route will render a form to edit the text
app.get('/journal/:id/edit', (req, res) => {
    const { id } = req.params;
    const scripture = scriptures.find(s => s.id === id);
    res.render('journal/edit', { scripture })
})

app.patch('/journal/:id', (req, res) => {
    const { id } = req.params;
    const foundScripture = scriptures.find(s => s.id === id);
    const newScriptureText = req.body.scripture;
    foundScripture.scripture = newScriptureText;
    res.redirect('/journal')
})

app.delete('/journal/:id', (req, res) => {
    const { id } = req.params;
    scriptures = scriptures.filter(s => s.id !== id);
    res.redirect('/journal');
})

app.listen(3000, (req, res) => {
    console.log("listening on port 3000!")
});



