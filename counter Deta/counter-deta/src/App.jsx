import { useState } from 'react'
import '../src/index.css'
import { GetDate } from './GetDate'


function App() {

  const [currentDate, setCurrentDate] = useState(new Date())
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const incrementDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + step);
    setCurrentDate(newDate);
    setCount(c => c + step)
  }
  const decerement = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - step);
    setCurrentDate(newDate);
    setCount(c => c - step)
  }

  const hanleIncrementStep = () => {
    setStep(s => s + 1)
  }
  const handleDecrementstep = () => {
    setStep(
      step > 1 ? s => s - 1 : step)
  }


  return (
    <>
      <div className="container">
        <div className="button">
          <button onClick={handleDecrementstep}>-</button>
          <h3>Step : {step}</h3>
          <button onClick={hanleIncrementStep}>+</button>
        </div>
        <div className="button">
          <button onClick={decerement}>-</button>
          <h3>Count : {count}</h3>
          <button onClick={incrementDay}>+</button>
        </div>
        < GetDate currentDate={currentDate} count={count}/>
      </div>
    </>
  )
}

export default App
