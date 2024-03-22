#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your first Number", type: "number", name: "firstNumber" },
    { message: "enter seconde number", type: "number", name: "secondeNumber" },
    {
        message: "select one of the oprator to perform opration",
        type: "list",
        name: "oprators",
        choices: ["addition", "subtraction", "multiplication", "divition"],
    },
]);
if (answer.oprators === "addition") {
    console.log(answer.firstNumber + answer.secondeNumber);
}
else if (answer.oprators === "subtraction") {
    console.log(answer.firstNumber - answer.secondeNumber);
}
else if (answer.oprators === "multiplication") {
    console.log(answer.firstNumber * answer.secondeNumber);
}
else if (answer.oprators === "divition") {
    console.log(answer.firstNumber / answer.secondeNumber);
}
else {
    console.log("please select valid oprator");
}
