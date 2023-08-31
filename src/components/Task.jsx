export const Task = (props) => {
    return (
        <div>
            <h1 style={{ color: props.isFinished ? 'green' : 'black' }}> { props.name } </h1>
            <button onClick={() => props.delete(props.id) }> X </button>
            <button onClick={() => props.finish(props.id)}> Complete </button>
        </div>
    )
}