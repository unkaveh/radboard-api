var express = require('express');
var router = express.Router();
const Todo = require('../controllers/todo.controller')

router.post('/create', Todo.create);
router.get('/findAll', Todo.findAll);

module.exports = router;