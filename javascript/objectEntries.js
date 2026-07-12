const videos = [
    {
        title: "JS",
        channel: "A"
    },
    {
        title: "CSS",
        channel: "B"
    },
    {
        title: "HTML",
        channel: "C"
    }
];

for (const video of videos){
    for (const [key,value] of Object.entries(video)){
        console.log(`${key} ${value}`);
    }
    console.log();
}