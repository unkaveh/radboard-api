var express = require('express');
var router = express.Router();
const Todo = require('../controllers/todo.controller')

router.post('/create', Todo.create);
router.get('/findAll', Todo.findAll);
router.get('/find/:id', Todo.findOne);
router.get('/update/:id', Todo.update);
router.get('/delete/:id', Todo.delete);


module.exports = router;