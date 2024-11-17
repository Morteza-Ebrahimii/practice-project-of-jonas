function Item({ items, onHandleDelete, onToggleItem }) {

    return (
      <li >
        <input type="checkbox"
          value={items.packed}
          onChange={() => onToggleItem(items.id)}
        />
        <span style={items.packed ? { textDecoration: 'line-through', opacity: .5 } : {}}>
          {items.quantity} {items.description}
        </span>
        <button onClick={() => onHandleDelete(items.id)}>❌</button>
      </li>
    );
  }

  export default Item