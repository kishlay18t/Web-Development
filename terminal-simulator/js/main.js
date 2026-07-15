// IMPORTS
import { handleFormSubmission } from "./terminal/terminal.js";

// DOM REFERENCES
const terminalInterface = document.getElementById(`terminal-interface`);
const initialPromptInput = document.getElementsByClassName("prompt-input");

// EVENT LISTENERS
terminalInterface.addEventListener("submit", (e) => {
    if (e.target.matches(".prompt-space")){
        handleFormSubmission(e);
    }
});

// INITIALIZATION
function initialize(){
    initialPromptInput.focus();
};

initialize();