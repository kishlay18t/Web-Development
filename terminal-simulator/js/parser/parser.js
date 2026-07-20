import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { mkdir } from "../commands/mkdir.js";
import { pwd } from "../commands/pwd.js";

function parseInput(input){
    return input.toLowerCase().split(" ").filter((word) => word !== '');
}

const commands = {
    ls,
    cd, 
    pwd,
    mkdir
};

export { parseInput, commands };