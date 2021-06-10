//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
let input = 'turpentine and turtles';


//Whales only speak in vowels so you will need to extract vowels from the input variable.

//This function will convert the input string into an array, and filter out all letters that are not vowels.
let resultsArray = [...input].filter((ele) => {
  let modifiedEle = ele.toLowerCase();
  if(modifiedEle.match(/[aeiou]/)) { return ele;}
});


//According to the instructions, whales double their e‘s and the u‘s in their language. This function will map the previously filtered array. It will either return doubled  "e's" and "u's", or singularly return any unaccounted for vowel.  

resultsArray = resultsArray.map((ele) => {
  let modifiedEle = ele.toLowerCase();
  if(modifiedEle.match(/[eu]/)) {return ele.repeat(2);}
  else {return ele;}
})

//TTo produce proper whale language, we want to capitalize each letter and put them together as one string.
let whaleTalk = resultsArray.join('').toUpperCase()


console.log(whaleTalk)
