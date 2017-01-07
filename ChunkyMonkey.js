function chunkArrayInGroups(arr, size) {
  
  var newarray = [];
  
  for (a = 0; a < arr.length; a = a + size){
    var sliced = arr.slice(a, a + size);
    newarray.push(sliced);
  }


  return newarray; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
