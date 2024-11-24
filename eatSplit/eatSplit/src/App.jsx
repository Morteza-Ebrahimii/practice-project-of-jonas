import './App.css'
import { friends } from './data/friends'


function App() {


  return (<>
    <div className='app'>
      <div className="sidebar">
        <FriendsList />
      </div>
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
      <button className='button'>select</button>
    </li>
  );
}