function rectangleArea(width, height) {
      const area = width * height;
      if(width <= 0 || height <= 0){
        return "Invalid dimensions"
      }
 return area;
}
console.log(rectangleArea(4,6));
console.log(rectangleArea(4,0));