const express = require('express');

const server = express();
server.use(express.json());

const users = require('./users.json');

server.get("/users",(req, res)=>{
    const queries = req.query;
    console.log(queries)
    const qArray = Object.keys(queries);

    if(qArray.length>1){
        console.log("More than 1 query provided")
        res.status(400).json({
            error:"API Validation Failed",
            message:"API can accept only one query at a time either name or email"
        })
    }else if(qArray.length==1){
        console.log("Entering this scope to filter users")
        let filteredUsers;
        if(queries.name){
            console.log("Filtering with name")
            filteredUsers = users.filter(user => user.name.toLowerCase()==queries.name.toLowerCase());
            // console.log("Filtered Users: ",filteredUsers)
        }
        if(queries.email){
            console.log("Filtering with email")
            filteredUsers = users.filter(user => user.email.toLowerCase()==queries.email.toLowerCase());
            // console.log("Filtered Users: ",filteredUsers)
        }
        console.log("Filtered Users: ",filteredUsers)
        res.json(filteredUsers)
    }else{
        console.log("Returning all users")
        res.json(users)
    }
})

server.post("/users", (req, res)=>{
    const body = req.body;
    if(!body.email){
        res.status(400).json({
            error:"API Validation failed",
            message:"Email is required to create user"
        })
    }
    const filteredUser = users.filter(user => user.email.toLowerCase()==body.email.toLowerCase())
    if(filteredUser.length>0){
        res.status(400).json({
            error:"API Validation failed",
            message:"Email must be unique for each user. This email address is already in use."
        })
    }
    
    res.status(201).json(body)
})

server.listen(3000, ()=> console.log("Server is running on port 3000"))