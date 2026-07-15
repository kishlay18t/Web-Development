let formCount = 1;

function lockPrompt(event){
    const prompt_input = document.querySelector(`#prompt-input[data-id="${formCount}"]`);

    event.preventDefault();
    prompt_input.readOnly = true;
};

function generateNewPrompt(){

}

function handleFormSubmission(){
    lockPrompt(event);

    formCount += 1;
};

export { handleFormSubmission };