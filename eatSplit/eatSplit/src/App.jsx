import { useState } from 'react'
import './App.css'
import { friends } from './data/friends'

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>{children}</button>
  )
}


function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friend, setFriend] = useState(friends)


  const handleShowAddFreind = () => {
    setShowAddFriend(show => !show)
  }

  const onAddFriends = (newFriend) => {
    setFriend([...friend, newFriend])
    setShowAddFriend(false)
  }

  return (<>
    <div className='app'>
      <div className="sidebar">
        <FriendsList friends={friend} />
        {showAddFriend && <FormaddFriends onAddFriends={onAddFriends} />}
        <Button onClick={handleShowAddFreind}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  </>)
}

export default App


function FriendsList({ friends }) {

  return (
    <ul>
      {friends.map((friend) => (
        <Friends friends={friend} key={friend.id} />
      ))}
    </ul>
  )
}

function Friends({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && <p className='red'>you owe {friends.name} {Math.abs(friends.balance)}$</p>}
      {friends.balance > 0 && <p className='green'>{friends.name} owes you {friends.balance}$ </p>}
      {friends.balance === 0 && <p>you and {friends.name} are even</p>}
      <Button>Add</Button>
    </li>
  );
}



function FormaddFriends({ onAddFriends }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !image) return
    const id = crypto.randomUUID()

    const newItem = {
      id,
      name,
      image: `${image}?=${id}`,
      balense: 0
    }

    onAddFriends(newItem);
  }



  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👭Friend name</label>
      <input type="text" value={name} onChange={(e => setName(e.target.value))} />

      <label>🖼 Image URL</label>
      <input type="text" value={image} onChange={(e => setImage(e.target.value))} />

      <Button>Add</Button>

    </form>
  )
}

function FormSplitBill() {

  return (
    <form className='form-split-bill'>
      <h2>split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♂️ your expense</label>
      <input type="text" />

      <label>👭 X`s exponse</label>
      <input type="text" />

      <label>🤔 Who is paying the bill</label>
      <select >
        <option value="your">you</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
