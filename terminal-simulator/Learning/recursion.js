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
                                },
                                {
                                    filename: "ITR Files",
                                    type: "directory",
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

function addReference(node, parent){
    node.parent = parent;

    // if (!node.children){
    //     return;
    // }

    for ( const nodeChild of node.children ){
        addReference(nodeChild, node)
    }
}

addReference(fileSystem, null);

let currentDirectory = fileSystem.children[0].children[0]; //user directory
console.log(currentDirectory.parent.filename);
