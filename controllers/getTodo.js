// import the model
// controllers mei pura logic likhege

const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req,res)=>{

    try{
       const todos = await Todo.find({});
       res.status(200).json(
            {
                success:true,
                data:todos,
                message:"entry created successfully"
            }
        )

    }catch(err){
        console.log(err)
    }

}

exports.getTodoById= async(req,res)=>{
     try{
        // extract basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       if(!todo){
        return res.status(404).json({
            success:false,
            message:"no data found with given id"
        })
       }

       res.status(200).json({
        success:true,
        data:todo,
        message:`${id} successfully fetched`
       })

    }catch(err){
        console.log(err);
    }



}