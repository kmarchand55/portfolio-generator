// const fs = require('fs');
// const generatePage = require('./src/page-template.js')
const inquirer = require('inquirer');

const promptProject = () => {
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};

//promptUser()
//.then(answers => console.log(answers))
//.then(promptProject())


// const promptProject = portfolioData =>{
//   if (!portfolioData.projects){
//     portfolioData.projects=[]

// //.then(promptProject)
// //  .then(projectAnswers => console.log(projectAnswers));



// //inquirer.prompt([
//     /* {
//       type: 'input',
//       name: 'description',
//       message: 'Provide a description of the project (Required)'
//     },
//     {
//       type: 'checkbox',
//       name: 'languages',
//       choices: ['Javascript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
//     },
//     {
//       type: 'input',
//       name: 'link',
//       message: 'Enter the GitHub link to your project. (Required)'
//     },
//     {
//       type: 'confirm',
//       name: 'feature',
//       message: 'Would you like to feature this project?',
//       default: false
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAddProject',
//       message: 'Would you like to enter another project?',
//       default: false
//     } */
//   //]) 
//   //.then(answers => console.log(answers))
  
//    //if (projectData.confirmAddProject)
//    // {return promptProject(portfolioData)}
//   //else 
//    // {return portfolioData}
  
 
 
// }


//  }



// //const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;


// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
    
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
  
//   printProfileData(profileDataArgs);