/*Theory: .then() returns a new promise*/

function getVideos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const videos = ["video 1", "video 2"];

            resolve(videos)
        }, 2000);
    })
}

console.log("Program running...");

getVideos().then((videos) => {
    return videos.join(" ");

})
.then((videoStr) => console.log(videoStr));