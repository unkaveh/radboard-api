const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const url = 'mongodb+srv://root:b3nq258@cluster1-rbdyf.mongodb.net/test?retryWrites=true&w=majority'
console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 16,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        required: true
    },
    completed: Boolean
})

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Todo', todoSchema)