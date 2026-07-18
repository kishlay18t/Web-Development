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

const toFind = "downloads";
function findFilePath(node, fileArray, target){
    fileArray.push(node.filename);
    if (node.filename === target){
        return fileArray;
    }

    const children = node.children;

    for (const child of children){
        return findFilePath(child, fileArray, target);
    }
}

const filePath = findFilePath(fileSystem, [], "downloads").slice(1).join("/");
console.log(filePath);