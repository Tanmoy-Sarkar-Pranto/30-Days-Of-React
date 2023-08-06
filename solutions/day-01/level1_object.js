const dog = {
    name: "Bull",
    legs: "short",
    color: "green",
    age: "4",
    bark: function(){
        return "woof woof"
    },
    breed: "Labrador",
    getDogInfo: function(){
        return (`${this.name}\n${this.legs}\n${this.color}\n${this.age}\n${this.bark()}\n${this.breed}`)
    }
}

console.log(dog.getDogInfo())

