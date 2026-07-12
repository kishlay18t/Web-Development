function divide(a, b){
    if (b == 0){
        throw new Error("Can not divide by 0");
    }

    return a/b;
}
try {
    const result = divide(10, 0);
    console.log(result);
}
catch (error){
    console.log(error.message);
}
finally{
    console.log("Division Completed!");
}