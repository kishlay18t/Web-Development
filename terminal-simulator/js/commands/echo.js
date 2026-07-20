import { getCurrentDirectory } from "../storage/storage.js";

function checkMissingArgs(inputArray){
    return inputArray.length === 4;
}

function checkSymbol(symbol){
    return symbol === ">" || symbol === ">>";
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
    // Missing Arguments
    if (!checkMissingArgs(inputArray)){
        return "Invalid Syntax!";
    }
    // input 2 is a string and, No "" around input string -- Will implement this later.

    // input 3 is not > or >>
    if (!checkSymbol(inputArray[2])){
        return "Wrong Symbol!";
    }
    // Stated text file does not exist in the current directory.
    if (!checkFileExistence(inputArray[3])){
        return "Incorrect File Name!";
    }

    return "";
}

function overWriteTextContent(string, targetFile){

    targetFile.content = string;
}

function appendTextContent(string, targetFile){
    targetFile.content += `\n${string}`;
}

function echo(inputArray){
    const validationMessage = validateInput(inputArray);

    if (validationMessage !== ""){
        return validationMessage;
    }

    const content = inputArray[1];
    const option = inputArray[2];
    const filename = inputArray[3];
    const targetFile = getCurrentDirectory().children.find((child) => child.filename === filename);

    if (option === ">"){
        overWriteTextContent(content, targetFile);
    }
    else{
        appendTextContent(content, targetFile);
    }

    return "Content added successfully!";
}

export { echo };