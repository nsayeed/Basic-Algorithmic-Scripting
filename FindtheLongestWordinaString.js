
function findLongestWord(str) {
  var sstring = str.split(" "); //split the string into an array
  var word = sstring[0]; //assign the first word in the array to the var 'word'
  var i = 0; //set var i to 0
  
  for(i=0; i < sstring.length; i++){
    if(sstring[i].length > word.length){
      word = sstring[i];
    }
  }
  
return word.length;
  
  
}
 


findLongestWord("The quick brown fox jumped over the lazy dog");
