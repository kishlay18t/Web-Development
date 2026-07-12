/* IMPORTS */
import { toggleSidebar, restoreSidebarState } from "./sidebar.js";
import { renderError, renderLoading, renderVideos } from "./render.js";
import { getVideos } from "./api.js";

/* DOM REFERENCES */
const menuBtn = document.getElementById("menu-btn");
const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("search_btn");
const videoGrid = document.getElementById("video-grid");

/* Application State */
let isLoading = true;
const videos = [];

/* SEARCH */
searchInput.focus();
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

/* EVENT LISTENERS */
searchBtn.addEventListener("click", handleSearch);
menuBtn.addEventListener("click", toggleSidebar);
videoGrid.addEventListener("click",(event) => {
    const card = event.target.closest(".video-card");

    if (!card){
        return;
    }

    console.log("Video Card clicked!");
});


/* INITIALIZATION */
renderLoading();


async function initializeApp(){
    try{
        const fetchedVideos = await getVideos();

        videos.push(...fetchedVideos);
        renderVideos(videos);
    }
    catch (error){
        renderError(error);
        console.log(error);
    }
    finally{
        isLoading = false;
    }
}

initializeApp();
restoreSidebarState();