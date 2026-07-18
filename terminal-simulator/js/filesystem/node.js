function addReference(node, parent){
    node.parent = parent;

    for ( const nodeChild of node.children ){
        addReference(nodeChild, node)
    }
} // Adds parent node reference to each child node.

export { addReference };