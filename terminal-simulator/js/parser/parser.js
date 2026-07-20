import { cat } from "../commands/cat.js";
import { cd } from "../commands/cd.js";
import { echo } from "../commands/echo.js";
import { ls } from "../commands/ls.js";
import { mkdir } from "../commands/mkdir.js";
import { pwd } from "../commands/pwd.js";
import { touch } from "../commands/touch.js";

function parseInput(input){
    return input.toLowerCase().split(" ").filter((word) => word !== '');
}

const commands = {
    ls,
    cd, 
    pwd,
    mkdir,
    touch,
    echo,
    cat
};

export { parseInput, commands };