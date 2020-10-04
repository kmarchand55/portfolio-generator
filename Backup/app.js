
const inquirer = require('inquirer');
console.log(inquirer)
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
//const fs = require('fs');
//const generatePage = require('./page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});



  // Notice the lack of parentheses around the `profileDataArr` parameter?

// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:


//Whats wrong with this?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  

//       // Is the same as this...
//       profileDataArr.forEach(profileItem => {console.log(profileItem)});
       
//     //console.log(profileItem)
  
//   };
// printProfileData(["Ken"]);
//var three = 'three: declared outside the block';

//if (true === true) {
//  three = 'three: changed inside the block'; // notice: we don't redeclare
//  console.log(three); // prints 'three: changed inside the block'
//}

//console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.

// let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:

//let four = 'four: outside the block';

//if (true === true) {
  //four = 'four: inside the block'; // notice: we don't redeclare the variable
  //console.log(four); // prints 'four: inside the block'
//}

//console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.


//Whats wrong with this?
//const printProfileData = profileDataArr => {
  //  for (let i = 0; i < profileDataArr.length; i++) {
    //  console.log(profileDataArr[i]);
   // }
 // };



// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
    //for (let i = 0; i < profileDataArr.length; i++) {
      //console.log(profileDataArr[i]);
    //}
  //};


  // Using function expression syntax
//const addNums = function(numOne, numTwo) {
    //   return numOne + numTwo;
  //};
  
  // Using new arrow function syntax
  //const addNums = (numOne, numTwo) => {
  //  return numOne + numTwo;
  //};

  //const printProfileData = (profileDataArr) => {
  //  console.log(profileDataArr);
  //};
  
  //printProfileData(profileDataArgs);

  
  
  //const animalArray = ['dog', 'cat', 'pig'];

//animalArray.push('cow');

//const personObj = {
  //name: 'Lernantino',
  //age: 99
//};

//personObj.age = 100;
//personObj.occupation = 'Developer';



  //const profileDataArgs = process.argv.slice(2, process.argv.length);
  //console.log(profileDataArgs);


//Show this one
//var profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

  //var commandLineArgs = process.argv;
//console.log(commandLineArgs);
  
  
//var message = 'Hello Node!';

//var sum = 5 + 3;

//console.log(message);
//console.log(sum);