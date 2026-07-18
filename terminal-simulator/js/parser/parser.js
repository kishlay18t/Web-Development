import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";

function parseInput(input){
    return input.toLowerCase().split(" ").filter((word) => word !== '');
}

const commands = {
    ls,
    cd
};

export { parseInput, commands };