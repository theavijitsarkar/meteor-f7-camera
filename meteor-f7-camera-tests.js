// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-f7-camera.js.
import { name as packageName } from "meteor/snowbreeze:meteor-f7-camera";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-f7-camera - example', function (test) {
  test.equal(packageName, "meteor-f7-camera");
});
