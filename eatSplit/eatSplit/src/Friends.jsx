import { Button } from "./Button";



export function Friends({ friends, onSelectedfriend, selectedFriends }) {

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
