const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },

  }
let keys = Object.keys(users)
let mostSkills = 0
let mostSkilledUser = ''
// console.log(typeof keys)
// for (let i = 0; i < keys.length; i++) {
//     let user = users[keys[i]]; 
//     if (user.skills.length > mostSkills) {
//         mostSkills = user.skills.length;
//         mostSkilledUser = keys[i]; 
//     }
// }

// console.log(mostSkilledUser, mostSkills)

// let count = 0
// for (let i = 0; i < keys.length; i++) {
//     let user = users[keys[i]]; 
//     if(user.isLoggedIn && user.points>=50){
//         count += 1
//     }
// }

// console.log(count)


// for (let i = 0; i < keys.length; i++) {
//     let user = users[keys[i]]; 
//     if(user.skills.includes("MongoDB") && user.skills.includes("Express") && user.skills.includes("React") && user.skills.includes("Node")){
//         console.log(user)
//     }
// }

let newUser = Object.assign({},users)
// console.log(newUser.Alex)
newUser["Pranto"] = {
    email: 'pranto@pranto.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
}

// console.log(newUser.Pranto)

// console.log(Object.keys(newUser))

// console.log(Object.values(newUser))
