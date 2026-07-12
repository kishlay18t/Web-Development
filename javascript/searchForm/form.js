const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

function handleSearch(event){
    event.preventDefault();

    const query = input.value;


    if (query.trim() === ""){
        alert("Search can not be empty!");
        input.focus(); 
        return;
    }

    console.log(`Searching for: ${query}`);
}
form.addEventListener("submit", handleSearch);


