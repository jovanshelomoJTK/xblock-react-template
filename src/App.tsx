import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Button className="bg-primary" onClick={() => setCount((c) => c + 1)}>
        Click to increment: {count}
      </Button>
      <Button className="bg-secondary" onClick={() => setCount2((c) => c + 1)}>
        Click to increment: {count2}
      </Button>
    </div>
  );
}

export default App;
