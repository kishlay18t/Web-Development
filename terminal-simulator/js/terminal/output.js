import { ls } from "../commands/ls.js";
import { cd } from "../commands/cd.js";
import { pwd } from "../commands/pwd.js";
import { mkdir } from "../commands/mkdir.js";
import { touch } from "../commands/touch.js";
import { echo } from "../commands/echo.js";
import { cat } from "../commands/cat.js";
import { commands } from "../parser/parser.js";
import { display } from "./terminal.js";

function handleOutput(command, inputArray){
        const output = commands[command](inputArray);  // if command = 'ls' -- calls ls()
        console.log(output);
        display(output);
}

export { handleOutput };