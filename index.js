const _ = require("./overscore");

const show = ["6", "8", "10"].map(_.ary(parseInt, 1));
console.log(show);
