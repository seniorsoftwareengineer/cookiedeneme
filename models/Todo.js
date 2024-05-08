const mongoose= require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const TodosTablosu = new Schema({
    id:ObjectId,
    content:{type:String},
    date:{type:Date,default:Date.now()}
})

const Todos = mongoose.model("Todos",TodosTablosu);

module.exports=Todos;