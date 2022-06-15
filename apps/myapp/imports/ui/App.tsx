import React, { useEffect, useState } from "react";
import { MyFeature } from "@lessonup/package-a";
import { newTracker } from "@snowplow/browser-tracker";

export const App = () => {
  useEffect(() => {
    console.info("foo", newTracker("t1", "https://foo"));
  }, []);
  const [count, setCount] = useState(0);


  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Test btn
      </button>
      <MyFeature />
    </>
  );
};
