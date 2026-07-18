// IMPORTS
import { handleFormSubmission } from "./terminal/terminal.js";
import { addReference } from "./filesystem/node.js";
import { fileSystem } from "./storage/storage.js";
import { handleInput } from "./terminal/input.js";

// DOM REFERENCES
const terminalInterface = document.getElementById(`terminal-interface`);
const initialPromptInput = document.getElementsByClassName("prompt-input")[0];

// EVENT LISTENERS
terminalInterface.addEventListener("submit", (e) => {
    if (e.target.matches(".prompt-space")){
        handleInput(e);
        // await output
        handleFormSubmission(e);
    }
});

// INITIALIZATION
function initialize(){
    initialPromptInput.focus();
    addReference(fileSystem, null);
};

initialize();