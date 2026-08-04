const forum = document.getElementById("post-forum");

async function getPost(){
    const response = await fetch("http://localhost:3000/api/post");

    if (!response.ok){
        throw new Error(
            "HTTP Error" + response.status
        );
    }

    const posts = await response.json();

    return posts;
}

function displayError(error){
    forum.innerHTML = error;
}


async function renderPosts(){
    try {
        const posts = await getPost();

        let html = "";
        for (const {id, title, channel, views} of posts){
            html += `
                <div class="post">
                    <div class="head">
                        <h2 class="id">${id}</h2>
                        <h2 class="title">${title}</h2>
                    </div>
                    <div class="body">
                        Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.
                        Built on Google Chrome's V8 JavaScript engine, it enables the creation of server-side applications, APIs, real-time services, and command-line tools using
                        the same language used for front-end development. It uses an event-driven, non-blocking I/O model, making it highly efficient for scalable network applications 
                        such as chat apps, streaming services, and APIs.
                    </div>
                    <div class="foot">
                        <p class="author">Author: ${channel}</p>
                        <p class="views">${views} views</p>
                    </div>
                    
                </div>
            `;
        }

        forum.insertAdjacentHTML("beforeend", html);
    }
    catch(error) {
        console.log(error);
        displayError(error);
    }
}

renderPosts();