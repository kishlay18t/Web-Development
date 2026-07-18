import { parseInput } from "../parser/parser.js";
import { handleOutput } from "./output.js";
import { commands } from "../parser/parser.js";
import { display } from "./terminal.js";

function getInputArray(event){
    const formInput = event.target.querySelector("input");
    const inputString = formInput.value;
    const input = parseInput(inputString);

    return input;
}

function validateInputCommand(inputs){
    const commandsArray = Object.keys(commands)
    const command = commandsArray.find((element) => element === inputs[0]);

    return command;
}

function handleInput(event){
    const inputArray = getInputArray(event);
    const command = validateInputCommand(inputArray);

    if (!command){
        console.log('Invalid Command');
        display('Invalid Command');
    }
    else{
        console.log('command: ' + command);
        handleOutput(command, inputArray);
    }
}

export { handleInput };