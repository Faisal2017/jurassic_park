var Park = function() {
  this.enclosure = [];
}

Park.prototype.numDino = function() {
  return this.enclosure.length;
}

module.exports = Park;