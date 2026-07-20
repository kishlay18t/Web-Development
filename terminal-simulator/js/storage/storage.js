let fileSystem = {
    filename: "root",
    type: "directory",
    children:[
        {
            filename: "home",
            type: "directory",
            children: [
                {
                    filename: "user",
                    type: "directory",
                    children: [
                        {
                            filename: "downloads",
                            type: "directory",
                            children: []
                        },
                        {
                            filename: "documents",
                            type: "directory",
                            children: [
                                {
                                    filename: "notes.txt",
                                    type: "text file",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};


let currentDirectory = fileSystem.children[0].children[0]; //user directory
function setCurrentDirectory(directory){
    currentDirectory = directory;
}

function getCurrentDirectory(){
    return currentDirectory;
}

function addNewDirectory(directory){
    currentDirectory.children.push(directory);
}

export { fileSystem, getCurrentDirectory, setCurrentDirectory, addNewDirectory };