// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*2; //single parameter 
const add = (x,y) => x+y; // more then 1 ||
const give5 = () => 5; // no parameter 
const result = add(5,6);

const doMath = (x,y) => { //multiline function
    const sum = x+y;
    const sub = x-y;
    const result = sum *sub;
    return result;
}

const result2 = doMath(7,5);
console.log(result2);