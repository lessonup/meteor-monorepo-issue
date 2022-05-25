import React from "react";
import { PrimaryButton } from "@lessonup/package-b";

declare var require: any;
declare var window: any;

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
