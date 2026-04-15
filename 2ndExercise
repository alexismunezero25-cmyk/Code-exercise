function countVowels(str){
    const Vowels = "aeiou";
    let count = 0;
    let found = new Set();

    for(let char of str.toLowerCase()){
        if(Vowels.includes(char)){
            count++;
            found.add(char);
        }
    }
    return {
        count: count,
        VowelsFound: [...found]
    };
}

console.log(countVowels("MUNEZERO Alexis"));