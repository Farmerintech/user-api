import { users } from "./users.js"

//get all users
export const getAllUsers = (req, res) =>{
        res.json(users)
}
// get a single user
export const getASingleUser = (req, res) =>{
        const userId = Number(req.params.id)
        const user = users.find((user) => user.id === userId);
        if(!user){
            return res.status(404).json({msg:`No user with id ${userId}`})
        }
        res.status(200).json(user);
    
}

// updateUser

export const updateUser = (req, res) =>{
    const {name, username, email, phone} = req.body;
    const userId = Number(req.params.id)
    const user = users.find((user) => user.id === userId);
    if(!user){
        return res.status(404).json({msg:`No user with id ${userId}`})
    }
    if(name){
        user.name = name;
    }
    if(username){
        user.username = username;
    }
    if(email){
        user.email = email
    }
    if(phone){
        user.phone = phone
    }
    res.status(200).json({msg:`user updated successfully....`})
}

// create a new user

export const createUser = (req, res ) => {
    const {name, username, email, phone} = req.body;
    console.log(req.body);
    const id = users.length + 1;

    users.push({
        id,
        name,
        username,
        email,
        phone
    })
    const newUser = users.find(user => user.id === id);
    res.status(200).json({msg:`new user created successfully....`, newUser})

}

export const deleteUser = (req, res)=>{
    const userId = req.params.id
    const user = users.find((user) => user.id === userId);
    if(!user){
        return res.status(404).json({msg:`No user with id ${userId}`})
    }
    const users = users.filter(user => user.id !==userId);
    res.status(200).json({msg:`user deleted successfully....`, newUser})

}