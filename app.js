const inquirer = require('inquirer');
const promptProject = portfolioData => {
  console.log();
  .then(ProjectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject){
    return promptProject(portfolioData);
    } else {
      return portfolioData;

    }
  });


  //if there's no 'projects' array property, create one

  profileData.projects = [];
 
  return inquirer.prompt([
  {

      type: 'input',
      name: 'name',
      message: 'What is your name of your project?(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
        }
      },
    {
      type: 'input',
      name: 'description',
      message: ' Provide a description of the project (Required)'
    },
    {
      type:'checkbox',
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

    },
  ]);
};
promptUser()
.then(answer => console.log(answers))
.then(promptProject)
.then(projectAnwers => console.log(projectAnswers))



//promptProject().then(answers => console.log(answers));


// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });