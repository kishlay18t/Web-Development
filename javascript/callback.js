function getVideos(callback){
    setTimeout(() => {
        const videos = ["video 1", "video 2"];

        callback(videos);   
    },2000);
}

getVideos((result) => console.log(result));