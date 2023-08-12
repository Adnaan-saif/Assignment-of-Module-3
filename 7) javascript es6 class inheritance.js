class Animal {
    constructor (name, sound) {
        this.name = name;        
        this.sound = sound;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Dog extends Animal {
    fetch(){
        console.log("Fetching the ball!");
    }
}