function User({ id, name, username }) {
    return (
        <div style={{ border: "1px solid red", margin: "8px", padding: "3px" }}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{id}</div>
        </div>
    )
}

export default User