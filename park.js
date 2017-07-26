var Park = function() {
  this.enclosure = [];
}

Park.prototype.numDino = function() {
  return this.enclosure.length;
}

Park.prototype.add = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

// Park.prototype.removeOneOfType = function(type) {
//   var index = this.enclosure.indexOf(type);
//     this.enclosure.splice(index);
// }

Park.prototype.removeType = function(type) {
  for (dino of this.enclosure) {
    if (dino.type === type) {
      var index = this.enclosure.indexOf(type);
      this.enclosure.splice(index, 1);
    }
  }
};

Park.prototype.offspringGreaterTwo = function() {
  for ( dinosaur of this.enclosure) {
    if (dinosaur.numOffspring > 2) {
      return dinosaur;
    }
  }
}

Park.prototype.offspringAfterOneYear = function(dinosaur) {
  //var length = dinosaur.numOffspring
  for (var i = 0; i < dinosaur.numOffspring; i++){
    this.enclosure.push(Object.assign({}, dinosaur));
  } 
  console.log(this.enclosure);
}

module.exports = Park;