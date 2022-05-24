import React, { useEffect } from "react";
import { MyFeature } from "@lessonup/package-a";
import { newTracker } from "@snowplow/browser-tracker";

export const App = () => {
  useEffect(() => {
    console.info("foo", newTracker("t1", "https://foo"));
  }, []);

  return <MyFeature />;
};
