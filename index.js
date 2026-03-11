const mongoose = require("mongoose")
const express = require("express");
const app = express();
const User = require("./models/userModels");

app.use(express.json());

app.use("/user" , userRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() =>console.log("Connected"))
.catch(() =>
    console.log(err)
)


// let user = [];

// app.get("/user" ,(req , res) =>{
//     res.json(user)
// });

// app.get("/user/:id" , (req , res) =>{
//     const id = parseInt(req.params.id);
//     const foundUser = user.find( u => u.id === id)
//     if(!user){
//         return res.status(404).json({ message : "No user found"})
//     }

//     res.json(user);
// })



// app.post("/user" , (req , res,) =>{
//     // console.log("POST HIT");
//     //  const 

//     const{name , age } = req.body;

//     // const NewUser = req.body;
//    const id = user.length+1;

//    const NewUser ={
//     id: id,
//     name: name,
//     age: age

//    }

//    if(!name || !age ){
//     return res.status(404).json({ message: "No name or age found "});
//    }

//     user.push(NewUser)
//     res.status(201).json(NewUser);
// });

// app.put("/user/:id", (req , res) =>{

//     const id = parseInt(req.params.id);

//     const foundUser = user.find( u => u.id === id )

//     if(!foundUser){
//         return res.status(404).json({message : "No user found"})
//     }
//     const{name  , age} = req.body;

//     if(name) foundUser.name = name;
//     if(age) foundUser.age = age;

//     res.json(foundUser)
    

// })

// app.delete("/user/:id", (req, res) =>{
//     const id = parseInt(req.params.id);

//     const foundUser = user.find(u => u.id === id)

//     if(!foundUser){
//         return res.status(404).json({message: "No user found to get deleted"})
//     }
     
//     const index = user.findIndex(u => u.id === id)

//     user.splice(index,1);

//     res.status(200).json({message : "Yes the user is deleted "})


// })


app.listen(3000 , ()=> console.log("Index js chlra"));
