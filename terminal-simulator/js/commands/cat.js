import { getCurrentDirectory } from "../storage/storage.js";

function checkArgs(inputArray){
    return inputArray.length === 2;
}

function checkFileExistence(filename){
    let fileExists = true;
    if (!filename.includes(".txt")){
        fileExists = false;
    }

    const searchFile = getCurrentDirectory().children.find((child) => child.filename === filename);
    if (!searchFile){
        fileExists = false;
    }

    return fileExists;
}

function validateInput(inputArray){
    const filename = inputArray[1];

    if (!checkArgs(inputArray)){
        return "Invalid Argument";
    }

    if (!checkFileExistence(filename)){
        return "The File mentioned does not exist!";
    }

    return "";
}

function cat(inputArray){
    const validationMessage = validateInput(inputArray);

    if (validationMessage !== ""){
        return validationMessage;
    }

    const filename = inputArray[1];
    const target = getCurrentDirectory().children.find((child) => child.filename === filename);

    return target.content;
}

export { cat };