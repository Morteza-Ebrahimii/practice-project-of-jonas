import { useState } from 'react'
import './App.css'
import { friends } from './data/friends'
import { FriendsList } from './FriendsList'
import { Button } from './Button'
import { FormAddFriends } from './FormAddFriends'
import { FormSplitBill } from './FormSplitBill'

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
        {showAddFriend && <FormAddFriends onAddFriends={onAddFriends} />}
        <Button onClick={handleShowAddFreind}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectFriends={selectedFriend}
        onSplitBill={handleSplitBill} />}
    </div>
  </>)
}

export default App



