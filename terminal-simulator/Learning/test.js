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
                                    children: undefined
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

// const home = fileSystem.children.find((child) => child.filename === "home");
// console.log(fileSystem.children[0].filename);
// console.log(home.filename);
let currentDirectory = fileSystem.children[0].children[0]; //user directory
// const ls = currentDirectory.children.map((child) => {
//     return child.filename;
// });

// console.log(ls);
function cdForward(name){
    currentDirectory = currentDirectory.children.find((child) => child.filename === name);
};

function ls(){
    return currentDirectory.children.map((child) => {
    return child.filename;
    });
}; // Returns an array filenames in the current directory.

cdForward("documents");
console.log('pwd');
console.log(currentDirectory);
console.log('ls');
console.log(ls()[1]);