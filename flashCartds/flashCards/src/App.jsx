import './index.css'
import questions from './data'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );

}

function FlashCards() {

  const [selected, setSelected] = useState(null)

  const handleClick = (id) => {
    setSelected(id !== selected ? id : null)
  }

  return (
    <div className="flashcards">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id !== selected ? '' : 'selected'}
          >
            <p>
              {question.id === selected ? question.answer : question.question}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default App
