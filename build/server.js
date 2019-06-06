"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _data = require("../data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.send(_data2.default);
});
var PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, function () {
    console.log("Example app listening on port 3000!");
  });
} catch (err) {
  console.log(err);
}
//# sourceMappingURL=server.js.map