// Closure -- A function inside another function which retains the variables in its lexical environment

function createScoreTracker(){
    let score = 0;

    return function adder(number){
        score += number
        return score;
    }
}

const trackScore = createScoreTracker();

console.log(trackScore(10));
console.log(trackScore(5));
console.log(trackScore(20));