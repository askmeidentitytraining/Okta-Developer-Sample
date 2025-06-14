// var users = ["Sumit","Rahul", 2]
// console.log(users)

var sumit = {
    name:"sumit",
    age:32,
    subject:"Maths"
}
// console.log(sumit)
var rahul = {
    age:21,
    name:"Rahul",
    // subject:"Chemistry"
}

// console.log(rahul)

const users = [
    {
    name:{
        firstName: "Sumit",
        lastName:"Tiwari"
    },
    age:32,
    subjects: ["Chemitstry", "Physics", "Maths"]
    },
    {
    age:21,
    name:"Rahul",
    subjects: ["Chemitstry", "Physics", "Maths"]
    },
    {
    name:"Vinay",
    age:32,
    subjects: ["Chemitstry", "Physics", "Maths"]
    },
]

// console.log(users[0].subjects.length)

//Map function
// users.map(user => console.log(user))

//foreach
// users.forEach(user => console.log(user))

// console.log(users.filter(user => user.subject=="Chemistry"))

// console.log(users.find(user => user.subject=="Chemistry"))

var listofSubjects = ["Chemistry","Physics", "Maths", "Physics", "Chemistry", "Maths"]
console.log(new Set(listofSubjects))