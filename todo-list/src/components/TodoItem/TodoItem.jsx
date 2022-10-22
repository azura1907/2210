export default function (props) {
    return (
        <li className="list-group-item p-4 fs-4 align-items-center d-flex justify-content-between">
            <div className="content">
                <input checked={props.todo.isActive} className="form-check-input me-1 p-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label ms-5" for="firstCheckbox">{props.todo.todo}</label>
            </div>
            <div className="icon">
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    props.editTodo(props.todo);
                }}><i className="fa-solid fa-pen ms-5"></i></a>
                <a href="" onClick={(event) => {
                    event.preventDefault();
                    props.removeTodo(props.todo);
                }}><i className="fa-solid fa-trash ms-5"></i></a>
            </div>
        </li>
    )
}