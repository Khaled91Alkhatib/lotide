const assertObjectsEqual = require("../assertObjectsEqual");

assertObjectsEqual({first: "1", second: "2"}, {first: "1", second: "2"});
assertObjectsEqual({first: "1", second: 2}, {first: "1", second: "2"});
