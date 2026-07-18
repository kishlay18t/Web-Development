import { currentDirectory } from "../storage/storage.js";

function ls(inputArray){
    if (inputArray.length !== 1){
        const error= "Invalid Command Argument";
        return  error;
    }

    const output = currentDirectory.children.map((child) => {
    return child.filename;
    });

    return output.join(" ");
    
}; // Returns a string of filenames in the current directory.

export { ls };