/*=============================
  Primary Application Code
=============================*/

var Moon = require("moonjs");
require("./components/header.moon")(Moon);

new Moon({
  el: "#app"
});
