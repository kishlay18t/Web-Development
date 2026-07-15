let formCount = 1;
let currentFormID = 1;

const terminalInterface = document.getElementById("terminal-interface");

function lockPrompt(event){
    const promptInput = document.querySelector(`#prompt-input[data-id="${currentFormID}"]`);

    event.preventDefault();
    promptInput.readOnly = true;
    currentFormID++;
};

function generateNewPrompt(){
    terminalInterface.insertAdjacentHTML('beforeend',`

        <form id="prompt-form" data-id="${currentFormID}" class="prompt-space">
            <p>user@terminal-simulator ~ $</p>
            <input id="prompt-input" data-id="${currentFormID}">
        </form>
    
    ` );

    formCount += 1;
}

function shiftPromptFocus(){
    const newPromptInput = 
        document.querySelector(`#prompt-input[data-id="${currentFormID}"]`);

    newPromptInput.focus();
}

function handleFormSubmission(event){
    lockPrompt(event);
    generateNewPrompt();
    shiftPromptFocus();
};

export { handleFormSubmission };