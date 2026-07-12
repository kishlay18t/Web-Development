const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        videos = ["video 1", "video 2"];

        resolve(videos);
    },2000);
});

promise.then((result) => console.log(result));