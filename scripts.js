class Traveler{
  constructor(name){
    this.name = name
    this.food = 1
    this.isHealthy = true 
  }
  hunt(){
    this.food += 2
  }
  eat () {
    if(this.food >= 1){
      this.food -= 1
    }else{
      this.isHealthy = false
    }
  }

}

class Wagon{
  constructor(capacity){
    this.capacity = capacity
    this.passangers = []
  }
  getAvailableSeatCount(){
    return this.capacity - this.passangers.length
  }
  join(traveler){
    if (this.getAvailableSeatCount() > 0) {
      this.passangers.push(traveler)
    } 
  }
  shouldQuarantine(){
    for (let i = 0; i < this.passangers.length; i++) {
      if (this.passangers[i].isHealthy === false) {
        return true
      }
    }
    return false
  }
  totalFood(){
    let totalFood = 0
    for (let i = 0; i < this.passangers.length; i++) {
      totalFood += this.passangers[i].food
    }
    return totalFood
  }
}