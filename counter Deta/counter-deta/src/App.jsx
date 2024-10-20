import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1)
  }

  return (
    <div>
      <div>
        <input type="range" min='0' max='10'
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => {
          const newCount = count - step;
          setCount(newCount);
        }}>-</button>
        <input type="text"
          value={count}
          onChange={(e) => {
            const newValue = Number(e.target.value)
            setCount(newValue);
          }}
        />
        <button onClick={() => {
          const newCount = count + step;
          setCount(newCount);
        }}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ?
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
        : null}
    </div>
  );
}