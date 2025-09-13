// import the model
// controllers mei pura logic likhege

const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async (req,res)=>{

    try{
        // const {title,description} = req.body;
        // const response = await Todo.create({title,description})
        //using save fn 
        const todo = new Todo({
            title:req.body.title,
            description:req.body.description,
        });
       const savedTodo = await todo.save();
        console.log(savedTodo)
        res.status(200).json(
            {
                success:true,
                data:savedTodo,
                message:"entry created successfully"
            }
        )

    }catch(err){
        console.log(err)
        
    }

}