import React from "react";
import { PrimaryButton } from "@lessonup/package-b";

export const MyFeature = () => {
  return (
    <div>
      <h1>Hi!</h1>

      <PrimaryButton title="click me" onClick={() => console.info("click")} />
    </div>
  );
};
