import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectFriends, onSplitBill }) {

    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const paidByFriends = bill ? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === 'user' ? paidByFriends : -paidByUser);
    };

    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>split a bill with {selectFriends.name}</h2>

            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

            <label>🧍‍♂️ your expense</label>
            <input type="text" value={paidByUser}
                onChange={(e) => setPaidByUser(
                    Number(e.target.value) > bill ? paidByUser :
                        Number(e.target.value)
                )} />

            <label>👭 {selectFriends.name}`s exponse</label>
            <input type="text" disabled value={paidByFriends} />

            <label>🤔 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="your">you</option>
                <option value="friend">{selectFriends.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}
