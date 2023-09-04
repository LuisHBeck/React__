export const Person = (props) => {
    return (
        <div>
            <h1> Name: { props.name } </h1>
            <h2> Age: { props.age } </h2>
            <h2> Count: { props.count } </h2>
        </div>
    )
} 