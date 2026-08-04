const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", handlePostSubmission);

async function handlePostSubmission(event){
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
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
    };

    await fetch("http://localhost:3000/api/video", data);
    window.location.href = "/";
} 