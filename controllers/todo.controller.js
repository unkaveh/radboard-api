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
    Todo.findById(request.params.id)
    .then(todo => {
        if (note) {
          response.json(todo.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
};

// Update a todo identified by the noteId in the request
exports.update = (request, response, next) => {
    const body = request.body
    const todo = new Todo({
        title: body.title,
        content: body.content,
        date: new Date(),
        completed: body.completed || false
    })

    Todo.findByIdAndUpdate(request.params.id, todo, {new: true})
        .then(updatedTodo => {
            response.json(updatedTodo.toJSON())
        })
        .catch(error => next(error))
};

// Delete a todo with the specified noteId in the request
exports.delete = (request, response, next) => {
    Todo.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
};