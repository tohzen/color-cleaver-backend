/******************
 * YOUR CODE HERE *
 ******************/



 function colorCombinator(str1, str2) {
   if(
   (str1 === "red" && str2 === "yellow") || (str1 === "yellow" && str2 === "red")
   ){
   return "orange"
 }

 if(
  (str1 === "red" && str2 === "blue") || (str1 === "blue" && str2 === "red")
  )
  return "purple"
if(
  (str1 === "yellow" && str2 === "blue") || (str1 === "blue" && str2 === "yellow")
  )
  return "green"
 }





// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
