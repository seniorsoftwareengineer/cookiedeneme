const express = require("express");

const router = express.Router();

const Todos= require("../models/Todo.js")

const auth = require("./auth.js")

router.use("/auth",auth);

router.get("/todos", async function(req,res,next){

   const Todolar = await Todos.find({});
    
    res.status(200).json(Todolar);    

    console.log(req.header("origin"));
});

router.post("/todos",async function(req,res){
 

      const newTodo = await Todos.create(req.body);

      res.status(200).json(newTodo);
})

router.delete("/todos/:id", async function(req,res){

  const todo= await Todos.findOneAndDelete({_id: req.params.id});
  res.status(200).json(todo);
})

router.put("/todos/:id",async function(req,res){


  const currentTodo = await Todos.findOneAndUpdate({_id:req.params.id},req.body,{new:true});


  res.status(200).json(currentTodo);

})

module.exports=router;
