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

// Park.prototype.removeType = function(type) {

// }

Park.prototype.offspringGreaterTwo = function() {
  for ( dinosaur of this.enclosure) {
    if (dinosaur.numOffspring > 2) {
      return dinosaur;
    }
  }
}

module.exports = Park;