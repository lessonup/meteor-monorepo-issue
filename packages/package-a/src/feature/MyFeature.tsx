import React from "react";
import { PrimaryButton } from "@lessonup/package-b";

declare var require: any;
declare var window: any;

// To see that we have duplicate react, add this in node_modules/react-dom/index.js:
// window.React1 = require('react');
// also see: https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react

require("react-dom");
window.React2 = require("react");
console.log(window.React1, window.React2, window.React1 === window.React2);

export function MyFeature() {
  const [count, setCount] = React.useState(0);

  const onClick = () => {
    setCount((value) => value + 1);
  };

  return (
    <div>
      <h1>I clicked this {count} times</h1>

      <PrimaryButton title="increment" onClick={onClick} />
    </div>
  );
}
