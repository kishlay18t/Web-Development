import { getCurrentDirectory, addNewDirectory } from "../storage/storage.js";

function validateArgument(inputArray){
    return inputArray.length === 2;
}

function validateFilename(filename){
    return filename.includes("txt");
}

function touch(inputArray){

    const newFileName = inputArray[1];
    if (!validateArgument(inputArray) || !validateFilename(newFileName)){
        return "Invalid Argument";
    }

    const newDirectory = {
        filename: newFileName,
        type: "text file",
        children: [],
        parent: getCurrentDirectory()
    };

    addNewDirectory(newDirectory);
    return "";
}

export { touch };