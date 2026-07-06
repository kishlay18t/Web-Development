function getVideos(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok){
            throw new Error("HTTP error: " + response.status);
        }

        return response.json();
    })
    .then((posts) =>{
        return posts.map((post) => {
            return {
                title: post.title,
                channel: `User ${post.userId}`,
                views: `Post ID: ${post.id}`
            };
        })
    })
    .catch((error) => console.log(error));
};

const videos = [];
getVideos().then((fetchedVideos) => {
    videos.push(...fetchedVideos);

    renderVideos(videos);
});