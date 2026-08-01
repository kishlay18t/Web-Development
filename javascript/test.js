const ul = document.getElementById("users");
ul.addEventListener("click", (event) => {
    const item = event.target.closest("#users li");

    if (!item){
        return;
    }
    
    console.log(item.dataset.id);
})