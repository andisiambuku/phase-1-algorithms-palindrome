function isPalindrome(word) {
  // Write your algorithm here
  const newWord = gameWord(word);
  if(word === newWord){
      return true;
  }
  else {
    return false;
  }
}
function gameWord(word){
 
  const oldWord = word.split("");
  const reverseOldWord = oldWord.reverse();
  const gameWord = reverseOldWord.join("");
  return gameWord;
}

/* 
  Add your pseudocode here
  reverse the input word
if the reversed word is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  the first function gameWord is for reversing the word.
    first split the string to individual letters
    then reverse the letters
    then join the letters to form the string
    return the word
  the second function isPalindrome is to check if the input word matches 
  is similar to the word returned from the function gameWord
  if so it returns true
  if not it return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"));
}

module.exports = isPalindrome;
