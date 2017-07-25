var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 2);
  })

  it("dinosaur1 has a type", function() {
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus"); 
  });


  it("dinosaur1 has a number of offspring", function() {
    assert.strictEqual(dinosaur1.numOffspring, 3); 
  });


})