"use client";

import { useState } from "react";
import UnkownComponent from "./UnkownComponent";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-blue-500 p-4">
      <h1>Client Component</h1>
      <p>This is a client component</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <UnkownComponent />
    </div>
  );
}
