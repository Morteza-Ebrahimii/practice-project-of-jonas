import { faqs } from './data.js'
import './App.css'
import { useState } from 'react'

function App() {

  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )

}

function Accordion({ data }) {

  const [curOpen, setCurOpen] = useState(null)

  return (
    data.map((item, i) => <AccordionItem num={i} key={item.title} title={item.title} children={item.text} curOpen={curOpen} onCurOpen={setCurOpen} />)
  )
}

function AccordionItem({ num, title, children, curOpen, onCurOpen }) {

  let isOpen = num === curOpen;


  const handleToggle = () => {
    onCurOpen(isOpen ? null : num)
  }

  return (
    <div onClick={handleToggle} className={`item ${isOpen ? "open" : ""}`}>
      <p className="nubmer">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="text">{title}</p>
      <p>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}

export default App
