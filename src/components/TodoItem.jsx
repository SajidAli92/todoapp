import styles from "./todoitem.module.css";

function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item, "Deleted");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}{" "}
        </span>
        <span>
          {" "}
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            {" "}
            x{" "}
          </button>{" "}
        </span>{" "}
      </div>

      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem;
