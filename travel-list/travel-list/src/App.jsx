import { useState } from 'react';
import './App.css'


export default function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDelete(id) {
    setItems(items => items.filter((item) => item.id !== id))
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    )
  }

  return (
    <div className='app'>
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList items={items} onHandleDelete={handleDelete} onToggleItem={onToggleItem} />
      <Footer items={items} />
    </div>
  )
}


function Logo() {
  return <h1>🌴FAR AWAY👜</h1>
}



function Form({ onHandleAddItems }) {

  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)



  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }

    onHandleAddItems(newItem)

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




function PackingList({ items, onHandleDelete, onToggleItem }) {

  const [sortBy, setSortBy] = useState('input')

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice()
    .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItems = items.slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
          return <Item items={item} key={item.id} onHandleDelete={onHandleDelete} onToggleItem={onToggleItem} />
        })}
      </ul>

      <div className="actions" >
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  )
}



function Item({ items, onHandleDelete, onToggleItem }) {

  return (
    <li >
      <input type="checkbox"
        value={items.packed}
        onChange={() => onToggleItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: 'line-through', opacity: .5 } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onHandleDelete(items.id)}>❌</button>
    </li>
  );
}


function Footer({ items }) {

  if (!items.length) return (
    <p className="stats">
      <em>Start adding some items to you packing list 🔥</em>
    </p>
  )

  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? 'You got everything! ready to go ✈'
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  )
}
