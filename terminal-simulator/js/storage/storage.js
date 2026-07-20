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
                                    children: [],
                                    content: ""
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

function addNewFile(file){
    currentDirectory.children.push(file);
}

function remove(filename){
    currentDirectory.children = currentDirectory.children.filter((child) => child.filename !== filename);
}

export { fileSystem, getCurrentDirectory, setCurrentDirectory, addNewDirectory, addNewFile, remove };