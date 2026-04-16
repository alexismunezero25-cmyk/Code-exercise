
// function introduce(name, country = "Rwanda") {
//   return `${name} is from ${country}`;
// }

// console.log(introduce("Aline"));         
// console.log(introduce("John", "Kenya"));  
 

//other way


function introduce (name,  country){
  if(!country){
    country="Rwanda"
  };
  return `${name} is from ${country}`;
}
console.log(introduce("Aline"));
