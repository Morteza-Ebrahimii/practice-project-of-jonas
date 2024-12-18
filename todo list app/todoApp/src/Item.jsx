import { useState } from "react"


export default function Item({ task, onDelete }) {

    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(!checked)

    }

    return (<>
        <li className="items">
            <div className="container-item">
                <input type="checkbox" value={checked} onChange={handleChecked} />
                <h4 className={checked ? 'checked' : ''}>{task.task}</h4>
            </div>
            <button className="delete-itme" onClick={() => onDelete(task)}>❌</button>
        </li>
    </>
    )
}