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

function addReference(node, parent){
    node.parent = parent;

    for ( const nodeChild of node.children ){
        addReference(nodeChild, node)
    }
} // Adds parent node reference to each child node.

addReference(fileSystem, null);

function findFilePath(node, filePathArray){

    filePathArray.push(node.filename);
    if (node.filename === "root"){
        return filePathArray; 
    }

    return findFilePath(node.parent, filePathArray);

}

const filePath = findFilePath(currentDirectory , []);
filePath.pop();
const newFilePath = [];
for (let i = filePath.length - 1; i >= 0; i--){
    newFilePath.push(filePath[i]);
}

console.log(newFilePath.join("/"));