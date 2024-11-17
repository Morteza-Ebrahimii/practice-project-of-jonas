import { useState } from 'react';
import './App.css'
import Logo from './component/Logo'
import Form from './component/Form'
import PackingList from './component/PackingList'
import Footer from './component/Footer'

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

  function deleteAll() {

    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    )
    if (confirmed) setItems([])

  }

  return (
    <div className='app'>
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList items={items} onHandleDelete={handleDelete} onToggleItem={onToggleItem} onDeleteAll={deleteAll} />
      <Footer items={items} />
    </div>
  )
}