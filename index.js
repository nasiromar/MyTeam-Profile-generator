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
    },
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
    },
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
    },
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
    },
},


]) .then((userResponse) => {
    let mgr = new Manager (userResponse.managerName,
        userResponse.managerId,userResponse.Email,
        userResponse.managerOfiiceNumber);

    Team.push(mgr);

    addMembers ();

}) 
}
function addMembers (){
    console.log('build Team!');
inquirer
.prompt([
}
getManager();



