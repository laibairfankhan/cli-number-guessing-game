#! /usr/bin/env node
import inquirer from"inquirer";

import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(chalk.bgCyanBright("wellcome to number guessing game."));

const anwers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    }
]);
if(anwers.userGuessedNumber === randomNumber){
    console.log(chalk.bgGreenBright("congratulation! you guessed right number."));
    
}else{
    

 console.log (chalk.bgRedBright("you gussed wrong number."));


}
