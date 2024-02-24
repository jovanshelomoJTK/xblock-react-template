import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((c) => c + 1)}>
        Click to increment: {count}
      </Button>
      <Button variant="secondary" onClick={() => setCount2((c) => c + 1)}>
        Click to increment: {count2}
      </Button>
      <p className="font-bold">Warna yang sudah di custom di template ini:</p>
      <p className="text-primary">primary</p>
      <p className="text-secondary">secondary</p>
      <p className="text-foreground">foreground</p>
      <p className="text-muted">muted</p>
      <p className="text-success">success</p>
      <p className="text-destructive">destructive</p>
      <p className="text-warning">warning</p>
      <p className="text-container">container</p>
    </div>
  );
}

export default App;
