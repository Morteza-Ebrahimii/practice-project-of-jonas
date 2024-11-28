import { useState } from "react"
import Item from "./Item"

export default function List() {

    const [input, setInput] = useState('')
    const [task, setTask] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input === '')return

        const newItem = {
            id: crypto.randomUUID(),
            task: input,
            completed: false
        }

        setTask(cur => [...cur, newItem])
        setInput('')

    }

    const hadnleDelete = (target) => {
        setTask(cur => cur.filter(item => item.id !== target.id))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <input type="text" placeholder="Add new task" value={input} onChange={(e) => setInput(e.target.value)} />
                <button >Add</button>

                <ol className="list">

                    {task.length === 0 ? <h3>Let`s start, Add your tasks🎉</h3> :
                        task.map((item) =>
                            <Item key={item.id} task={item} onDelete={hadnleDelete} />
                        )}
                </ol>
            </div>
        </form>
    )
}