
function findLongestWord(str) {
  var sstring = str.split(" "); //split the string into an array
  var word = sstring[0]; //assign the first word in the array to the var 'word'
  var i = 0; //set var i to 0
  
  for(i=0; i < sstring.length; i++){    //As i increased the string is checked for the length of each word. 
    if(sstring[i].length > word.length){ //Length of new word checked against previous
      word = sstring[i];  //if the length of the new word is longer than the old then the new word is assigned to the var 'word'
    }
  }
  
return word.length;
  
  
}
 


findLongestWord("The quick brown fox jumped over the lazy dog");
