const prompt = require("prompt-sync")({ sigint: true });

// const month = prompt("Enter a month: ")

// if(month.toLowerCase()==="february"){
//     console.log(`${month} has 29 days`)
// }else if(['april','june','september','november'].includes(month.toLowerCase())){
//     console.log(`${month} has 30 days`)
// }else{
//     console.log(`${month} has 31 days`)
// }

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((number, i) => {
//   console.log(number, i)
// })

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
}

for (const key in user) {
    console.log(key, user[key])
}
