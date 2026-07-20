import { getCurrentDirectory, addNewDirectory } from "../storage/storage.js";
import { validateFilename } from "./cd.js";

function validateArgument(inputArray){
    return inputArray.length === 2;
}

function mkdir(inputArray){

    const newFileName = inputArray[1];
    if (!validateArgument(inputArray) || !validateFilename(newFileName)){
        return "Invalid Argument";
    }

    const newDirectory = {
        filename: newFileName,
        type: "directory",
        children: [],
        parent: getCurrentDirectory()
    };

    addNewDirectory(newDirectory);
    return "";
}

export { mkdir };