//b.Convert all the strings to title caps in a string array
// Using an anonymous function
const stringArray = ["hello world", "javascript is awesome", "title caps"];

const titleCapsArray = [];

for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const words = str.split(" ");

  const titleCapsString = (function() {
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
    }
    return words.join(" ");
  })();
  
  titleCapsArray.push(titleCapsString);
}

console.log(titleCapsArray);