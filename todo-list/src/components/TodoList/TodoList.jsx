import TodoItem from "../TodoItem/TodoItem";

export default function (props) {
    return (
        <ul className="list-group mt-5 mb-5">
            <li className="list-group-item">
                <div className="row edit">
                    <div className="my-3 mx-5 row justify-content-bet align-items-center">
                        <label for="edit-todolist" className="col-sm-2 col-form-label fs-2">Input: </label>
                        <div className="col-sm-6">
                            <input value={props.search} onChange={(e) => props.setSearch(e.target.value)} type="text" className="form-control" id="edit-todolist" />
                        </div>
                    </div>
                </div>
            </li>
            {
                props.todoList.map((todo) => {
                    return <TodoItem editTodo={props.editTodo} removeTodo={props.removeTodo} key={todo.id} todo={todo} />
                })
            }
        </ul>
    )
}