// import the model
// controllers mei pura logic likhege

const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req,res)=>{

    try{
        const id = req.params.id;
        const {title,description} = req.body; // takes new values
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,createdAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"updated successfully"
        })

    }catch(err){
        console.log(err)
    }

}