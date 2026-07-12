class VideoPlayer{
    constructor(title, currentTime){
        this.title = title;
        this.currentTime = currentTime
    }

    skip(seconds){
        this.currentTime += seconds;
    }

    play(){
        console.log(`Playing : ${this.title}`);
    }

    getCurrentTime(){
        return this.currentTime;
    }
}

const player = new VideoPlayer(
    "JavaScript Tutorial",
    0
);

setTimeout(() => player.play() ,2000);

player.skip(30);
player.skip(15);

console.log("Current Time : " + player.getCurrentTime());