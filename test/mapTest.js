const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map")

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 3, 5, 6, 7];
const results2 = map(numbers, number => number + 2);
assertArraysEqual(results2, [3, 5, 7, 8, 9]);
