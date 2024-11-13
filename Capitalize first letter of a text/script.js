
/*Capitalize first letter of a text */
const text = 'hi, I am Parisa';
const firstLetter = text.charAt(0);
const capitalizeFirstLetter = firstLetter.toUpperCase();
const finalText = text.replace(firstLetter,capitalizeFirstLetter);
console.log(finalText);
