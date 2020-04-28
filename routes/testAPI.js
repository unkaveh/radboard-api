var express = require('express');
var router = express.Router();
const Todo = require('../controllers/todo.controller')

let todos =[
    {
        "id": 1,
        "title": "bullshit",
        "content": "HTML is easy",
        "date": "2019-05-30T17:30:31.098Z",
    },
    {
        "id": 2,
        "title": "horseshit",
        "content": "Carole Baskins",
        "date": "2019-07-30T18:39:34.091Z",
    },
    {
        "id": 3,
        "title": "tigershit",
        "content": "Did not sing imagine",
        "date": "2019-09-30T17:30:31.098Z",
    },
    {
        "id": 4,
        "title": "",
        "content": "Ron Jermey",
        "date": "2019-10-30T17:30:31.098Z",
    },
]

router.post('/', Todo.create);

// router.get('/', function(req, res, next) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })  
//     res.end(JSON.stringify(todos))
//     Todo.create(todos)
// })
// router.get('/', function(req, res, next) {
//     res.send('API is working properly');
// });

module.exports = router;