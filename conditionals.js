users = [
    {
    name:"Sumit",
    isActive:false
    },
    {
    name:"Rahul",
    isActive:true
    },
    {
    name:"Vinay",
    isActive:"suspended"
    },
    {
    name:"Abhishek",
    isActive:"anything"
    }
]

users.map(user => {
    if(user.isActive==true){
        console.log("Active User: " + user.name)
    }else if(user.isActive == "suspended" ){
        console.log("Suspended User: "+ user.name)
    }else{
        console.log("Inactive User: "+ user.name)
    }
})

console.log(users[0].isActive?"True":"False")