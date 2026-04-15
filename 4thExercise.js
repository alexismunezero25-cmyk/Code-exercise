function processNames(names){
    return [...new Set(
        names
        .filter(name => name.length > 5)
        .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    )];
}

const names = ["alexis", "munezero", "alex", "mutsinzi", "aline", "allah"];
console.log(processNames(names));