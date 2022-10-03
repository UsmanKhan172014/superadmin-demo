const Cards= (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <p>{props.count}</p>
            </div>
        </div>
    )
}
export default Cards