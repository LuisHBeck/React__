export const Task = (props) => {
    return (
        <div>
            {/* <h1 className={{ color: props.isfinished ? 'green' : 'black' }}> { props.name } </h1> */}
            <h1 className={{ color: props.color }}> { props.name } </h1>
            <button onClick={() => props.delete(props.id) }> X </button>
            <button onClick={() => props.finish()}> Complete </button>
        </div>
    )
}