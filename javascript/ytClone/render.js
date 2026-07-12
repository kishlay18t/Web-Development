/* RENDERING */
function renderLoading() {
    videoGrid.innerHTML =
        `<p style="color: white">Loading Videos...</p>`;
};

const videoGrid = document.getElementById("video-grid");

function renderVideos(videosArray){
    const htmlArray = videosArray.map(({title, channel, views}) => 
        `<article class="video-card">
            <img class="thumbnail" alt="thumbnail" src="thumbnail.png">

            <div class="video-info">
                <img class="channel-logo" alt="logo" src="logo.png">

                <div>
                    <h3>${title}</h3>
                    <p>${channel}</p>
                    <p>${views}</p>
                </div>
                
            </div>
        </article>`);

    const htmlString = htmlArray.join("");

    videoGrid.innerHTML = htmlString;
};

function renderError(error){
    videoGrid.innerHTML =
        `<p style="color: white">Failed to load videos: ${error.message}</p>`;
}

export { renderError, renderLoading, renderVideos };