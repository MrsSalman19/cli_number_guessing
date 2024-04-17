#! /usr/bin/env node


import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6+1);



const answers = await inquirer.prompt([
{
name:"userGuessedNumber",
type:"number",
message:"Plz guess a Number from 0 t0 6",
},

]);

if(answers.userGuessedNumber=== randomNumber){
    console.log("Congratulations!You guessed a right Number." );
}

else {
    console.log("You guessed a wrong number.");
    
}