var assert = require("assert");
var Park = require("../park.js");

describe("Park", function() {
  var park;
  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    park = new Park("Jurassic Park");
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 2);
  })

  it("park has name", function() {
    assert.strictEqual(park.name, "Jurassic Park");
  })

  


})