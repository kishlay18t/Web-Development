import { setCurrentDirectory, getCurrentDirectory, fileSystem } from "../storage/storage.js";
import { findFilePath } from "../filesystem/filesystem.js";

//VARIABLES
let currentFormID = 1;
let filePath = [];

// DOM REFERENCES
const terminalInterface = document.getElementById("terminal-interface");

//FUNCTIONS
function lockPrompt(event){
    const promptInput = event.target.querySelector("input");

    event.preventDefault();
    promptInput.readOnly = true;
    currentFormID++;
};

// Form Input Handling
function generateNewPrompt(){
    const currentDirectory = getCurrentDirectory();

    const newPromptForm = document.createElement("form");
    newPromptForm.dataset.id = currentFormID;
    newPromptForm.classList.add("prompt-form");
    newPromptForm.classList.add("prompt-space");

    const para = document.createElement("p");
    para.textContent = "user@terminal-simulator ~ $";

    const input = document.createElement("input");
    input.classList.add("prompt-input");
    input.dataset.id = currentFormID;

    if (currentDirectory.filename !== "user"){
        updateDirectory(para);
    }
    newPromptForm.appendChild(para);
    newPromptForm.appendChild(input);
    terminalInterface.appendChild(newPromptForm);
    return input;
}

function shiftPromptFocus(promptInput){
    promptInput.focus();
}

function handleFormSubmission(event){
    lockPrompt(event);
    const newPromptInput = generateNewPrompt();
    shiftPromptFocus(newPromptInput);
};

// Form Output 

function display(outputStr){
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("output");
    outputDiv.textContent = outputStr;

    terminalInterface.appendChild(outputDiv)
}

function updateDirectory(para){

    const currentDirectory = getCurrentDirectory();
    const filePath = findFilePath(fileSystem, [], currentDirectory.filename).slice(1).join("/");
    para.textContent = `user@terminal-simulator /${filePath} ~ $`;
}

// EXPORTS
export { handleFormSubmission, display }; 
