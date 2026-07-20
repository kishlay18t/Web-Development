import { getCurrentDirectory, addNewFile } from "../storage/storage.js";

function validateArgument(inputArray){
    return inputArray.length === 2;
}

function validateFilename(filename){
    return filename.includes(".txt");
}

function touch(inputArray){

    const newFileName = inputArray[1];
    if (!validateArgument(inputArray) || !validateFilename(newFileName)){
        return "Invalid Argument";
    }

    const newFile = {
        filename: newFileName,
        type: "text file",
        children: [],
        parent: getCurrentDirectory(),
        content: ""
    };

    addNewFile(newFile);
    return "";
}

export { touch };