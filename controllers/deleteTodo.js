// import the model
// controllers mei pura logic likhege

const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req,res)=>{

    try{
      const id = req.params.id;
      await Todo.findByIdAndDelete(id);
      res.status(500).json({
        success:true,
        message:"Todo deleted"
      })

    }catch(err){
        console.log(err)
    }

}