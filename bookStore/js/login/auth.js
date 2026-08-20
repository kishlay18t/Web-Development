let users = [
    {
        username: "Kishlay",
        password: "1234"
    }
];

function addUser(username, password){
    const user = {
        username: username,
        password: password
    }

    users.push(user);
}

export { addUser };