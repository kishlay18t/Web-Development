import { setCurrentDirectory, getCurrentDirectory, fileSystem } from "../storage/storage.js";

function validateFilename(filename){
    if (filename === "..")  return true;

    const valid = /^[a-zA-Z0-9_-]+$/.test(filename);
    return valid;
}

function cdForward(name){
    const newDirectory = getCurrentDirectory().children.find((child) => child.filename === name)

    if (newDirectory === undefined){
        return "Invalid Directory Name!";
    }

    setCurrentDirectory(newDirectory);
    return "";
}

function cdBackwards(){
    const currentDirectory = getCurrentDirectory();
    setCurrentDirectory(currentDirectory.parent);
    return "";
}

function validateArgument(inputArray){
    return inputArray.length === 2;
}

function cd(inputArray){
    const argument = inputArray[1];
    if (!validateArgument(inputArray) || !validateFilename(argument)){
        const output = "Invalid Argument!";
        return output;
    }
    
    if (argument === ".."){
        return cdBackwards();
    }
    else{
        return cdForward(argument);
    }

}

export { cd, validateArgument };