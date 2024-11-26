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
  const [selectedFriend, setSelectedFriend] = useState(null)


  const handleShowAddFreind = () => {
    setShowAddFriend(show => !show)
  }

  const onAddFriends = (newFriend) => {
    setFriend([...friend, newFriend])
    setShowAddFriend(false)
  }

  const handleSelectFriend = (friend) => {
    setSelectedFriend((cur) => cur?.id === friend?.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    setFriend(friends => friends.map((friend) =>
      friend.id === selectedFriend.id ?
        { ...friend, balance: friend.balance + value } : friend
    ))
    setSelectedFriend(null)
  }

  return (<>
    <div className='app'>
      <div className="sidebar">
        <FriendsList friends={friend} onSelectedfriend={handleSelectFriend}
          selectedFriends={selectedFriend} />
        {showAddFriend && <FormaddFriends onAddFriends={onAddFriends} />}
        <Button onClick={handleShowAddFreind}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectFriends={selectedFriend}
        onSplitBill={handleSplitBill} />}
    </div>
  </>)
}

export default App


function FriendsList({ friends, onSelectedfriend, selectedFriends }) {

  return (
    <ul>
      {friends.map((friend) => (
        <Friends friends={friend} key={friend.id} onSelectedfriend={onSelectedfriend}
          selectedFriends={selectedFriends} />
      ))}
    </ul>
  )
}

function Friends({ friends, onSelectedfriend, selectedFriends }) {

  const isSelected = selectedFriends?.id === friends?.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && <p className='red'>you owe {friends.name} {Math.abs(friends.balance)}$</p>}
      {friends.balance > 0 && <p className='green'>{friends.name} owes you {friends.balance}$ </p>}
      {friends.balance === 0 && <p>you and {friends.name} are even</p>}
      <Button onClick={() => onSelectedfriend(friends)}>{isSelected ? 'Add' : 'Close'}</Button>
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

function FormSplitBill({ selectFriends, onSplitBill }) {

  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriends = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!bill || !paidByUser) return
    onSplitBill(whoIsPaying === 'user' ? paidByFriends : -paidByUser)
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>split a bill with {selectFriends.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>🧍‍♂️ your expense</label>
      <input type="text" value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser :
              Number(e.target.value)
          )
        } />

      <label>👭 {selectFriends.name}`s exponse</label>
      <input type="text" disabled value={paidByFriends} />

      <label>🤔 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)} >
        <option value="your">you</option>
        <option value="friend">{selectFriends.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
