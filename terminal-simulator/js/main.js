// IMPORTS
import { handleFormSubmission } from "./terminal/terminal.js";

// DOM REFERENCES
const prompt_form = document.getElementById(`prompt-form`);
const prompt_input = document.getElementById("prompt-input");

// EVENT LISTENERS
prompt_form.addEventListener("submit", handleFormSubmission);

// INITIALIZATION
function initialize(){
    prompt_input.focus();
}
initialize();