const editForm = document.getElementById("edit-form");

editForm.addEventListener("submit", handleEditSubmission);

async function handleEditSubmission(event){
    event.preventDefault();

    const id = event.currentTarget.querySelector(".id").value;
    const title = event.currentTarget.querySelector(".title").value;
    const author = event.currentTarget.querySelector(".author").value;
    const views = event.currentTarget.querySelector(".views").value;
    const content = event.currentTarget.querySelector(".content").value;

    if (!id || !title || !author || !views || !content){
        console.log("Missing Information");
        return;
    }

    const dataObj = {
        id: id,
        title: title,
        channel: author,
        views: views
    }

    const data = {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataObj)
    };
    console.log(data);

    await fetch(`/api/post/${id}`, data);
    window.location.href = "/";
}

async function initiateEditForum(){

    const reqId = window.location.pathname.split("/")[2];

    const response = await fetch(`/api/post/${reqId}`);
    if (!response.ok){
        throw new Error(
            "HTTP Error" + response.status
        );
    }

    const post = await response.json();
    console.log(post);

    let id = editForm.querySelector(".id");
    let title = editForm.querySelector(".title");
    let author = editForm.querySelector(".author");
    let views = editForm.querySelector(".views");
    let content = editForm.querySelector(".content");

    id.value = post.id;
    title.value = post.title;
    author.value = post.channel;
    views.value = post.views;
    content.value = 
        `Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.
        Built on Google Chrome's V8 JavaScript engine, it enables the creation of server-side applications, APIs, real-time services, and command-line tools using
        the same language used for front-end development. It uses an event-driven, non-blocking I/O model, making it highly efficient for scalable network applications 
        such as chat apps, streaming services, and APIs.`;
}

initiateEditForum();