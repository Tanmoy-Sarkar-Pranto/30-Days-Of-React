const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let newAges = ages.sort()
// console.log(newAges)
// console.log(Math.max(...ages),Math.min(...ages))

// console.log(newAges[newAges.length/2])

// let sum = 0
// newAges.forEach((age)=>{
//     sum += age
// })
// let avgAge = sum/newAges.length
// console.log(avgAge)

// const maxAge = Math.max(...newAges)
// const minAge = Math.min(...newAges)
// // console.log(maxAge-minAge)
// console.log(Math.abs(minAge-avgAge).toFixed(2))
// console.log(Math.abs(maxAge-avgAge).toFixed(2))





const countries = require('./countries')
// console.log(countries.slice(0,10))

// console.log(countries[Math.floor(countries.length/2)])

if(countries.length%2==0){
    console.log(countries.slice(0,countries.length/2))
    console.log(countries.slice(countries.length/2,countries.length))
}else{
    console.log(countries.slice(0,Math.ceil(countries.length/2)))
    console.log(countries.slice(Math.ceil(countries.length/2),countries.length))
}

