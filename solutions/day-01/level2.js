const countries = require("./countries")
const webTechs = require("./web_techs")
// console.log(countries)
// console.log(webTechs)

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.replace(/[^\w\s]/gi,'')
// console.log(text)

textArr = text.split(' ')
// console.log(textArr.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat") //Adds meat first
}
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar") // adds meat last
}
shoppingCart.splice(shoppingCart.indexOf("Honey"),1) // removes Honey

// shoppingCartString = shoppingCart.toString().replace("Tea","Green Tea")
// console.log(shoppingCartString.split(','))

shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea")
// console.log(shoppingCart)

// if(!countries.includes("Ethiopia")){
//     countries.push("Ethiopia")
// }else{
//     console.log("ETHIOPIA")
// }


// if(!webTechs.includes("Sass")){
//     webTechs.push("Sass")
//     console.log(webTechs)
// }else{
//     console.log("Sass is a CSS preprocess")
// }

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullstack = [frontEnd, backEnd]

console.log(fullstack)


