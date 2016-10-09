
function palindrome(str) {
  var lstring = str.toLowerCase();
  var rlstring = lstring.replace(/[\W_]/g, '');

  var array = [];
  array = rlstring.split("");
  var reversearray = array.reverse();
  var reversestring = reversearray.join("");


  if(rlstring == reversestring) {
    return true;
  }
  else {
  return false;
  }
}



palindrome("_eye");
