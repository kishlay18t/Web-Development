/*=====================================
    DOM REFERENCES
=====================================*/
const menuBtn = document.getElementById("menu-btn");
const createBtn = document.getElementById("create-btn");
const sidebar = document.getElementById("sidebar");
const createTxt = document.getElementById("create-txt");
const videoGrid = document.getElementById("video-grid");
const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("search_btn");

/*=====================================
    APPLICATION DATA
=====================================*/

let isLoading = true;
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

// const videos = [
//     {
//         title: "Tips to be a better problem solver [Last live lecture]",
//         channel: "2Blue1Brown",
//         views: "1.7m views • Streamed 3 years ago"
//     },
//     {
//         title: "10 Ways to Get a BMW in GTA 5",
//         channel: "Fuming Gamer",
//         views: "6M views • Streamed 1 years ago"
//     },

//     {
//         title: "Extreme Hide and Seek Challange in an Abadoned Village",
//         channel: "MR Beast",
//         views: "113M views • Streamed 7 days ago"
//     },

//     {
//         title: "Insane Indian Parkour Challenge",
//         channel: "Pete Anderson",
//         views: "17M views • Streamed 5 months ago"
//     }
// ];


/*=====================================
    RENDERING
=====================================*/
function renderLoading() {
    videoGrid.innerHTML =
        `<p style="color: white">Loading Videos...<p>`;
};


function renderVideos(videosArray){
    const htmlArray = videosArray.map((video) => 
        `<article class="video-card">
            <img class="thumbnail" alt="thumbnail" src="thumbnail.png">

            <div class="video-info">
                <img class="channel-logo" alt="logo" src="logo.png">

                <div>
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views}</p>
                </div>
                
            </div>
        </article>`);

    const htmlString = htmlArray.join("");

    videoGrid.innerHTML = htmlString;
};

/*=====================================
    BUSINESS LOGIC
=====================================*/
function searchVideos(query){
    return videos.filter(
    video => video.title.toLowerCase().includes(query.toLowerCase())
    );
}

function handleSearch(){

    if (isLoading){
        console.log("Videos are still loading!");
        return;
    }

    const query = searchInput.value;
    const searchedVideos = searchVideos(query);
    renderVideos(searchedVideos);
}

/*sidebar toggle*/
function isSidebarCollapsed(){
    if (sidebar.classList.contains("collapsed")){
        return true;
    }
    else{
        return false;
    }

}

function collapseSidebar(){
    sidebar.classList.add("collapsed");
    sidebar.classList.remove("expanded");
}

function expandSidebar(){
    sidebar.classList.add("expanded");
    sidebar.classList.remove("collapsed");
}

function toggleSidebar(){
    if (isSidebarCollapsed()) expandSidebar();
    else    collapseSidebar();
}
/*----------------------------------------------*/

/*=====================================
    EVENT LISTENERS
=====================================*/
searchBtn.addEventListener("click", handleSearch);

createBtn.addEventListener("click", function(){
    if (createTxt.textContent === "Create")
        createTxt.textContent = "Upload";
    else
        createTxt.textContent = "Create";
});

menuBtn.addEventListener("click", toggleSidebar);

/*=====================================
    INITIALIZATION
=====================================*/
renderLoading();

const videos = [];
getVideos().then((fetchedVideos) => {
    videos.push(...fetchedVideos);
    isLoading = false;

    renderVideos(videos);
});
