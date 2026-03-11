const User = require("../models/userModels");
let user = [];

exports.getUser =(req,res) =>{
   res.json(user)
}

exports.getUserByid =(req , res) =>{
     const id = parseInt(req.params.id);
    const foundUser = user.find( u => u.id === id)
    if(!foundUser){
        return res.status(404).json({ message : "No user found"})
    }

    res.json(user);

}

exports.createUser=(req , res ) =>{
     const{name , age } = req.body;

    // const NewUser = req.body;
   const id = user.length+1;

   const NewUser ={
    id: id,
    name: name,
    age: age

   }

   if(!name || !age ){
    return res.status(400).json({ message: "No name or age found "});
   }

    user.push(NewUser)
    res.status(201).json(NewUser);

}

exports.updateUser =(req , res ) =>{
    
    const id = parseInt(req.params.id);

    const foundUser = user.find( u => u.id === id )

    if(!foundUser){
        return res.status(404).json({message : "No user found"})
    }
    const{name  , age} = req.body;

    if(name) foundUser.name = name;
    if(age) foundUser.age = age;

    res.json(foundUser)
    


}

exports.deleteUser = (req , res )=>{
      const id = parseInt(req.params.id);

    const foundUser = user.find(u => u.id === id)

    if(!foundUser){
        return res.status(404).json({message: "No user found to get deleted"})
    }
     
    const index = user.findIndex(u => u.id === id)

    user.splice(index,1);

    res.status(200).json({message : "Yes the user is deleted "})



}