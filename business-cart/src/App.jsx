import './App.css'
import Avatar from './Avatar.jsx'
import img from './assets/photo.jpg'
import Descriptoin from './Description.jsx'
import Skills from './Skills.jsx'

function App() {
  return (
    <>
      <div className="card">
        <Avatar img={img} alt="morteza" />
        <Descriptoin />
        <Skills skills='HTML+CSS' imogy='✌' bg='blue'/>
        <Skills skills='js' imogy='✌' bg='red'/>
        <Skills skills='react' imogy='✌' bg='green'/>
      </div>
    </>
  )
}

export default App
