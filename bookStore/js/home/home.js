function home(){
    try {
        const home = document.getElementById("home");
        if (!home){
            throw new Error(
                "Element not found!"
            );
        }

    }
    catch(error){
        console.log(error);
        return;
    }
}

export { home };