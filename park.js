var Park = function() {
  this.enclosure = [];
}

Park.prototype.numDino = function() {
  return this.enclosure.length;
}

Park.prototype.add = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

module.exports = Park;