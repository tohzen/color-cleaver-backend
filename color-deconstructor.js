/******************
 * YOUR CODE HERE *
 ******************/


function colorDeconstructor(str) {
  if(str === "orange") {
    return "red and yellow"
  } 
  if(str === "purple") {
    return "red and blue"
  }
  if(str === "green") {
    return "blue and yellow"
}
}



// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
