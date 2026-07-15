//VARIABLES
let currentFormID = 1;

// DOM REFERENCES
const terminalInterface = document.getElementById("terminal-interface");

//FUNCTIONS
function lockPrompt(event){
    const promptInput = event.target.querySelector("input");

    event.preventDefault();
    promptInput.readOnly = true;
    currentFormID++;
};

function generateNewPrompt(){

    const newPromptForm = document.createElement("form");
    newPromptForm.dataset.id = currentFormID;
    newPromptForm.classList.add("prompt-form");
    newPromptForm.classList.add("prompt-space");

    const para = document.createElement("p");
    para.textContent = "user@terminal-simulator ~ $";
    newPromptForm.appendChild(para);

    const input = document.createElement("input");
    input.classList.add("prompt-input");
    input.dataset.id = currentFormID;
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

export { handleFormSubmission }; 