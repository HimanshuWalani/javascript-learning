const name="himanshu"
const age=24
//console.log(name+num+" Value");
//newer version to add strings in interpolation of string =>its dont using tilde ` ` symbol and write variables under the ${} 
//symbol with variable we can also use function in this form.
//to know about various function of string go to console and declare a string write its name under protoype you will find all 
//the function related to string or use mdn
//console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`);
//Another way to declare a string
const gameName=new String("HimanshuHW")
//console.log(gameName[0]);
//use of various string related functions

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

// const newString=gameName.substring(0,4)//cannot use negative values(treat negative as zero)
// console.log(newString);
// console.log(gameName.slice(-8,4));//can use negative values (negative means from the end)

const anotherString="  himanshu  "
console.log(anotherString.trim());//it trims the extra spaces

const url="https://himanshu.com//himanshu%20walani"

console.log(url.replace('%20','-'));
console.log(url.includes('himanshu'));

const splitTest="Himanhu-Walani-is-learning-javascript"
console.log(splitTest.split('-'));
console.log(splitTest[0]);