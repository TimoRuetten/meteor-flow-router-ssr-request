// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by flow-router-ssr-request.js.
import { name as packageName } from "meteor/flow-router-ssr-request";

// Write your tests here!
// Here is an example.
Tinytest.add('flow-router-ssr-request - example', function (test) {
  test.equal(packageName, "flow-router-ssr-request");
});
