#! /usr/bin/env node
import inquirer from"inquirer";

import chalk from "chalk";

//Math.random generate a decimal value:
//Math.floor use to convert  decimal value into integer:
const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(chalk.bgBlue(`\n\n"wellcome to number guessing game."\n\n`));

const anwers = await inquirer.prompt([
    //Take a user number:
    {
        name:"userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    }
]);

// Test condition to check if the user guessed the correct number:
if(anwers.userGuessedNumber === randomNumber){
    console.log(chalk.bgGreen("congratulation! you guessed right number."));
    
}else{
    

 console.log (chalk.bgRed("Sorry,you gussed wrong number."));
 console.log(chalk.yellow(`The correct number was: ${randomNumber}`));
 
}




