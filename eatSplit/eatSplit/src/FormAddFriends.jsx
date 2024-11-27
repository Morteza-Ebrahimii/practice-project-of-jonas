import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriends({ onAddFriends }) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) return;
        const id = crypto.randomUUID();

        const newItem = {
            id,
            name,
            image: `${image}?=${id}`,
            balense: 0
        };

        onAddFriends(newItem);
    };



    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label>👭Friend name</label>
            <input type="text" value={name} onChange={(e => setName(e.target.value))} />

            <label>🖼 Image URL</label>
            <input type="text" value={image} onChange={(e => setImage(e.target.value))} />

            <Button>Add</Button>

        </form>
    );
}
