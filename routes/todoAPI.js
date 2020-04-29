var express = require('express');
var router = express.Router();
const Todo = require('../controllers/todo.controller')

router.post('/create', Todo.create);
router.get('/findAll', Todo.findAll);
router.get('/find/:id', Todo.findOne);
router.put('/update/:id', Todo.update);
router.delete('/delete/:id', Todo.delete);


module.exports = router;