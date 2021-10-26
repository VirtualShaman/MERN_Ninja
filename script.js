class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        let stats = `Name:${this.name} // Strength:${this.strength} // Speed:${this.speed} // Health:${this.health}`
        console.log(stats)
    }
    drinkSake(){
        this.health += 10
    }
}

ninja1 = new Ninja("Donnie", 50)

console.log(ninja1)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()