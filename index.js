const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



const Team = [];

function getManager (){
console.log('build your Team!');
inquirer
.prompt([
{
    type: 'input',
    name: 'managerName',
    message: 'Enter the managers name?',
    validate: answer => {
        if(answer === '') {
            console.log('please enter name for your manager')
            return false;
        }
        return true;
    }
},
{
    type: 'input',
    name: 'managerId',
    message: 'Enter the managers Id ?',
    validate: answer => {
        if(answer === '') {
            console.log('please enter your managers Id')
            return false;
        }
        return true;
    }
},

{
    type: 'input',
    name: 'managerEmail',
    message: 'Enter the managers Email?',
    validate: answer => {
        if(answer === '') {
            console.log('please enter your managers Email')
            return false;
        }
        return true;
    }
},
{
    type: 'input',
    name: 'managerOfficenumber',
    message: 'Enter the managers office number?',
    validate: answer => {
        if(answer === '') {
            console.log('please enter your managers office number')
            return false;
        }
        return true;
    }
}


]) .then((userResponse) => {
    let mgr = new Manager (userResponse.managerName,
        userResponse.managerId,userResponse.Email,
        userResponse.managerOfiiceNumber);

    Team.push(mgr);

    addMembers ();


}) 
}

//create function + create team//
function addMembers () {
    console.log('build Team!');
} inquirer.prompt([{
    type: "list",
    name: "memberChoice",
    message: "Would you like to add another team member?",
    choices: [
        "Engineer",
        "Intern",
        "No More Members"
    ]

}]).then (userChoice => {
    switch(userChoice.memberChoice) {
        case "Engineer":
            addEngineer();
            break ;
        case "Intern":
                addIntern();
            break
        default:
                buiildteam();
    }

})



function addEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "Engineer's Name:",
        validate: answer => {
            if(answer === '') {
                console.log('please enter name for your Engineer')
                return false;
            }
            return true;
        }
},
{ 
    type:'input',
    name: 'engineerId',
    message: 'Engineers Id:',
    validate: answer => {
        if(answer === '') {
            console.log('please enter your Engineers Id')
            return false;
        }
        return true;
    }
},
{
    type:'input',
    name: 'engineerEmail',
    message: 'Engineers Email:',
    validate: answer => {
        if(answer === '') {
            console.log('please enter your Engineers Email')
            return false;
        }
        return true;
    }
},
{  
    type: 'input',
    name: 'engineerGithub',
    message: 'Engineers Github unsername:',
    validate: answer => {
        if(answer === '') {
            console.log('please enter Github for Engineer')
            return false;
        }
        return true;
    }
    
},
]).then ((userResponse) => {
    let Eng = new Engineer (userResponse.engineerName,
        userResponse.engineerId,userResponse.Email,
        userResponse.engineerGithub);

    Team.push(Eng);
    addMembers ();
})
};
    
function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "Enter the name of your Intern:",
        validate: answer => {
            if (answer < 0) {
                console.log('Please enter a name for Intern');
                return false;
            }
            return true;
        }
},
{    
    type: 'number',
    name: 'internId',
    message: 'Enter the Intern ID!',
    validate: answer => {
        if (answer < 0) {
            console.log('Please enter a Id for Intern');
            return false;
        }
        return true;
    }
},
{   
    type: 'input',
    name: 'internEmail',
    message: 'Enter the Interns Email',
    validate: answer => {
        if (answer < 0) {
            console.log('Please enter a Email for Intern');
            return false;
        }
        return true;
    }
},
{
    type: 'input',
    name: 'interSchoool',
    message: 'Enter the Interns School',
    validate: answer => {
        if (answer < 0) {
            console.log('Please enter a School for Intern');
            return false;
        }
        return true;
    }
        
}

]).then ((userResponse) => {
    let Int = new Intern (userResponse.internName,
        userResponse.internId,userResponse.Email,
        userResponse.internGithub);

        Team.push(Int);
        addMembers ();

})

};

function addMembers() {
    inquirer.prompt([{ 
        type: 'List',
        name: 'newTeamMember',
        message: 'would you like to add another team member?',
        choices: ['Manager', 'Engineer', 'Intern', 'No, Creat page'],

}])

function buiildteam () {
    fs.writeFilesync(
        './dist/index.html',renderPage(Team),'Utf-8'
    );
}

getManager();

    







  




























}
 

