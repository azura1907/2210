export default function (props) {
    return (
        <div className="new-to-do-wrapper p-4 mt-5 bg-danger">
            <h2 className="fs-2 text-light">New to do:</h2>
            <li className="list-group-item d-flex">
                <div className="col-9">
                    <input
                        value={props.inputValue}
                        onChange={(event) => { props.handleInputChange(event.target.value) }}
                        type="text" placeholder="Beauty, pls write whatever you want..."
                        className="form-control p-3" />
                </div>
                <div className="col-3">
                    <button
                        onClick={props.handleAddClick}
                        type="button"

                        className={`btn btn-light text-danger ms-3 p-3`}
                    >
                        {props.editItem ? 'Edit' : 'Add'}
                    </button>
                </div>
            </li>
        </div>
    )
}