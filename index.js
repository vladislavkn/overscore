const _ = require("./overscore");

const fn = _.after(2, () => console.log("test"));
fn();
fn();
fn();
