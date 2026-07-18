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

export { findFilePath };