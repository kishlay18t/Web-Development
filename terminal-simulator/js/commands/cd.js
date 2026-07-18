import { currentDirectory } from "../storage/storage.js";

function cdForward(name){
    currentDirectory = currentDirectory.children.find((child) => child.filename === name);
};

function cdBackwards(){
    currentDirectory = currentDirectory.parent;
}

export { cdBackwards,cdForward };