import { Friends } from './Friends';

export function FriendsList({ friends, onSelectedfriend, selectedFriends }) {

    return (
        <ul>
            {friends.map((friend) => (
                <Friends friends={friend} key={friend.id} onSelectedfriend={onSelectedfriend}
                    selectedFriends={selectedFriends} />
            ))}
        </ul>
    );
}
