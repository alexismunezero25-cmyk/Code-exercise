function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "No data";
    } else {
        return Math.max(...arr);
    }
}

console.log(findLargestNumber([7, 10, 200])); // Output: 200