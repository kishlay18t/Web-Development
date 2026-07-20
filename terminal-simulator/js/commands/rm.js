import { getCurrentDirectory, remove } from "../storage/storage.js";

function validateArgument(inputArray){
    let isValid = true;
    const filename = inputArray[1];
    if (inputArray.length !== 2){
        isValid = false;
    }

    if (!getCurrentDirectory().children.find((child) => child.filename === filename)){
        isValid = false;
    }

    return isValid;
}

function rm(inputArray){
    const filename = inputArray[1];
    if (!validateArgument(inputArray)){
        return "Invalid Syntax!";
    }

    remove(filename);
    return "File/Directory removed successfully";
}

export { rm };