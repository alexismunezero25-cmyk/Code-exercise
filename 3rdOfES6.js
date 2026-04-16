const arr1 = [1,2,3];
const arr2 = [2,3,4];
const combined = [...arr1, ...arr2];
const uniqueArray = [...new Set(combined)];
console.log(uniqueArray);

