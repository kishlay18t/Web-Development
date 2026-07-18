import { ls } from "../commands/ls.js";
import { cd } from "../commands/cd.js";
import { commands } from "../parser/parser.js";
import { display } from "./terminal.js";

function handleOutput(command, inputArray){
        const output = commands[command](inputArray);  // if command = 'ls' -- calls ls()
        console.log(output);
        display(output);
}

export { handleOutput };