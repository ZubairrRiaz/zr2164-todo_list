#! /usr/bin/env node
import inquirer from 'inquirer';
let coldDrinks = [];
let condition = true;
while (condition) {
    let list = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'what you want to add in your todos?',
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: 'Do you really want to add?',
            default: 'false',
        },
    ]);
    coldDrinks.push(list.todo);
    condition = list.addmore;
    console.log(coldDrinks);
}
