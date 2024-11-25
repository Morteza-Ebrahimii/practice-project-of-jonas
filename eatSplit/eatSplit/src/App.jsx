import { Children, useState } from 'react'
import './App.css'
import { friends } from './data/friends'

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>{children}</button>
  )
}


function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)

  const handleShowAddFreind = () => {
    setShowAddFriend(show => !show)
  }

  return (<>
    <div className='app'>
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormaddFriends />}
        <Button onClick={handleShowAddFreind}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  </>)
}

export default App


function FriendsList() {

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



function FormaddFriends() {

  return (
    <form className='form-add-friend'>
      <label>👭Friend name</label>
      <input type="text" />

      <label>🖼 Image URL</label>
      <input type="text" />

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