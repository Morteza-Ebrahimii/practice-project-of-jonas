import { useState } from 'react';
import './App.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charer", quantity: 45, packed: true },
];

export default function App() {


  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Footer />
    </div>
  )
}


function Logo() {
  return <h1>🌴FAR AWAY👜</h1>
}



function Form() {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if(!description) return;
    
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem);
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>ADD</button>
    </form>
  )
}




function PackingList() {

  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => {
          return <Item items={item} key={item.id} />
        })}
      </ul>
    </div>
  )
}



function Item({ items }) {
  return (
    <li >
      {/* <input type="checkbox" /> */}
      <span style={items.packed ? { textDecoration: 'line-through' } : {}}>
        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}


function Footer() {
  return (
    <footer className="stats">
      <em> 💼 You have 1 items on your list, and you already packed 0 (0%)</em>
    </footer>
  )
}
