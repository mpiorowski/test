import { useState } from "react";

export default function UnkownComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-red-500 p-4">
      <h1>
        Yeah, so this is a client component, without use client directive, cos
        its a child of a client component
      </h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
