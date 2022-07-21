// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  //Code goes here!
  //use the logic of median
  //get the length and divide by 2
  let len= s.length
  //conditional
  if (len%2===1){
    return s[Math.floor(len/2)]
  }else{
    return s.slice((len/2)-1,(len/2)+1)
  }
}