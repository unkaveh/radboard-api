const Todo = require('../models/todo.model')

// Create a single Todo
exports.create = (request, response, next) => {
    const body = request.body
    const todo = new Todo({
        title: body.title,
        content: body.content,
        date: new Date(),
        completed: body.completed || false
    })

    todo.save()
        .then(savedTodo => savedTodo.toJSON())
        .then(savedAndFormattedTodo => {
            response.json(savedAndFormattedTodo)
        })
        .catch(error => next(error))
}

// Find all todo
exports.findAll = (request, response) => {
     Todo.find({}).then(todos => {
        response.json(todos.map(todo => todo.toJSON()))
      })
      .catch(error => {
          response.status(500).send({
              message: error.message || "Some error occured while retrieving todos"
          })
      })
}


// Find a single todo with a noteId
exports.findOne = (request, response, next) => {

};

// Update a todo identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a todo with the specified noteId in the request
exports.delete = (req, res) => {

};