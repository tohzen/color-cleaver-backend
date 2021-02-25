/******************
 * YOUR CODE HERE *
 ******************/
const validPrimary1 ='red'
const validPrimary2 = 'yellow'
const validPrimary3 = 'blue'


  function isValidPrimary(str) {
    if(str === validPrimary1 || str === validPrimary2 || str === validPrimary3) 
    return true
    else return false

  }



// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
