#! /usr/bin/env node

import inquirer from 'inquirer';

let coldDrinks = [];

let condition = true;

while (condition) {

let Q1 = await inquirer.prompt([{
    name: 'ask',
    type: 'list',
    choices: ['remove','add'],
    message: 'Select option'
}])
if(Q1.ask === 'add'){

let Q2 = await inquirer.prompt(
    [
    {
        name: 'todo',
        type: 'input',
        message: 'what you want to add in your todos?',
    },
    ]
)

if(Q2.todo !== ''){
    coldDrinks.push(Q2.todo);
    console.log(coldDrinks);   
}else{
    console.log('Please enter something to add!');
    
}
}

 else if(Q1.ask === 'remove'){
    let Q3 = await inquirer.prompt([{
        name: 'ask2',
        type: 'list',
        choices: coldDrinks,
        message: 'what do you want to remove?'
    }])
let coldDrinks_remove = coldDrinks.indexOf(Q3.ask2)
if(coldDrinks_remove >= 0){
    coldDrinks.splice(coldDrinks_remove,1)
    console.log('you remove '+Q3.ask2);
    console.log(coldDrinks);
    
}
}
let stop = await inquirer.prompt({
    name: 'stop',
    type: 'confirm',
    default: true,
    message: 'Do you want to continue?'
})
if(stop.stop === false){
    condition = false;
}
}
