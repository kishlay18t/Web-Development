function findFilePath(node, filePathArray){

    filePathArray.push(node.filename);
    if (node.filename === "root"){
        return filePathArray; 
    }

    return findFilePath(node.parent, filePathArray);
}



function getFilePath(currentDirectory){
    const filePath = findFilePath(currentDirectory , []);

    return filePath.reverse().join("/");
}

export { getFilePath };