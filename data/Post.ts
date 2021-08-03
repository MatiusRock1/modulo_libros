import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    }
})
const Todo = mongoose.model('Todo', todoSchema)
//export {Todo}
new Todo({
    titl: 'some title',
    description: 'some description'
})
new Todo({
    titl: 44,
    description: 'some description'
})
new Todo({
    titl: 'some title',
    description: 'some description',
    hour: 1
})
