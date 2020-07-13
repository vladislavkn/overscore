const _ = require("./overscore");

const fn = _.before(2, () => console.log("test"));
fn();
fn();
fn();
