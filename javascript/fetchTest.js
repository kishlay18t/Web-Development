fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if (!response.ok){
        throw new Error("HTTP error: " + response.status);
    }

    return response.json();
}) //response --> http response to fetch()
.then(posts => console.log(posts[0])) // posts --> parsed array of post objects
.catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/this-does-not-exist")
.then(response => {
    if (!response.ok){
        throw new Error("HTTP error: " + response.status);
    }

    return response.json();
})
.catch(error => console.log(error));