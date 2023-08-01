export function longestWord(sentence) {
    let senty = sentence.split(" ");
    let longestWord = senty[0];
    //display the array for myself 
    console.log(senty);
    //loop through the array
    for (let i in senty) {
      if (senty[i].length >= longestWord.length) {
        longestWord = senty[i];
      }
    }
    return longestWord;
}
console.log(longestWord("The dog jumped over the shipyard fence"));
//second function which checks for the shortest word in a list

export function shortestWord(sentence) {
  //split the sentence and store the values in an array "senty" 
  let senty = sentence.split(" ");
  let shortestWord = senty[0];
  //display the array for myself 
  console.log(senty);
  //loop through the array
  for (let i in senty) {
      if (senty[i].length <= shortestWord.length) {
          shortestWord = senty[i];
      }
  }
   return shortestWord;
}
console.log(shortestWord("The dog barked loudly at the cat up the tree"));


//the third function
export function wordLengths(sentence) {
  //initialize sum of values to 0
  let sum = 0;
  //split the sentence and store the values in an array "senty" 
  let senty = sentence.split(" ");
  //display the array for myself 
  console.log(senty);
  //loop through the array
  for (let i in senty) {
      //add all the lenghts of the words of the array
      sum += senty[i].length;
  }
  //return the sum
  return sum;
}
console.log(wordLengths("The dog barked loudly"))