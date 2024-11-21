import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [bill, setBill] = useState('');
  const [satisfaction, setSatisfaction] = useState(0);
  const [friendSatisfaction, setFriendSatisfaction] = useState(0);

  const percentage = (satisfaction + friendSatisfaction) / 2;
  const tipAmount = bill ? (+bill * (percentage / 100)) : 0;

  const handleReset = () => {
    setBill('');
    setSatisfaction(0);
    setFriendSatisfaction(0);
  };

  return <div className="app">
    <div className="price">
      <span>How much was the bill?</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        min="0"
      />
    </div>

    <SatisfactionSelector
      satisfaction={satisfaction}
      onSatisfactionChange={setSatisfaction}
      label="How did you like the services?"
    />
    <SatisfactionSelector
      satisfaction={friendSatisfaction}
      onSatisfactionChange={setFriendSatisfaction}
      label="How did your friends like the services?"
    />
    {bill !== '' &&
      (<>
        <div className="calculateSatisfied">
          <h3>You pay {+bill + tipAmount}$ (${+bill} + ${tipAmount} tip)</h3>
        </div>

        <div className="resetButton">
          <button onClick={handleReset}>Reset</button>
        </div>
      </>)}

  </div>

}

function SatisfactionSelector({ label, satisfaction, onSatisfactionChange }) {
  return (
    <div className="satisfied">
      <span>{label}</span>
      <select value={satisfaction} onChange={e => onSatisfactionChange(Number(e.target.value))}>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

SatisfactionSelector.propTypes = {
  label: PropTypes.string.isRequired,
  satisfaction: PropTypes.number.isRequired,
  onSatisfactionChange: PropTypes.func.isRequired,
};

export default App