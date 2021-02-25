/******************
 * YOUR CODE HERE *
 ******************/
const validSecondary1 = 'orange';
const validSecondary2 = 'purple';
const validSecondary3 = 'green';



function isValidSecondary(str) {
  if(str === validSecondary1  || str === validSecondary2 || str === validSecondary3) 
  return true
  else return false

}



// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
