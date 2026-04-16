
// function sum (...numbers){
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1,9,10,21));

// or instead of reduce let we use loop

const sum = (...numbers) => {
    total =0;
    for(let num of numbers){
        if (total += num);
    };
    return total;
}

console.log(sum(9,8,7,6,5,4,3,2,1));