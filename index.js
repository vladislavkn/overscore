const _ = require("./overscore");

const arr = [1, 2, 3, 4];
const newArr = _.concat(arr, 5, [6], [[7]]);

console.log(arr, newArr);
