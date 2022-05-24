"use strict";
exports.__esModule = true;
exports.MyFeature = void 0;
var react_1 = require("react");
var package_b_1 = require("@lessonup/package-b");
var MyFeature = function () {
    return (<div>
      <h1>Hi!</h1>

      <package_b_1.PrimaryButton title="click me" onClick={function () { return console.info("click"); }}/>
    </div>);
};
exports.MyFeature = MyFeature;
