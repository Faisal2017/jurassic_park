var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js")

describe("Park", function() {
  var park;
  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 2);
  })

  it("enclosure should start empty", function() {
    assert.strictEqual(park.numDino(), 0);
  })

  it("should add dinosaur to enclosure", function() {
    park.add(dinosaur1);
    assert.strictEqual(park.numDino(), 1);
  })

  it("remove dinosaur of particular type", function() {
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.removeType();
    assert.strictEqual(park.numDino(), 1);
  })


})