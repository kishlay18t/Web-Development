async function getVideos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok){
        throw new Error(
            "HTTP error: " + response.status
        );
    }

    const posts = await response.json();

    return posts.map(({title, userId, id}) => {
        return {
                title: title,
                channel: `User ${userId}`,
                views: `Post ID: ${id}`
            };
    });
}

export { getVideos };