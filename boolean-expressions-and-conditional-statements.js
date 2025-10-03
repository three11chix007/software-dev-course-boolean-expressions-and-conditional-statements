/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasSword = false;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
    console.log("You start walking towards the mountains.");
    const findTorch = readline.question("On the way, you spot a torch. Do you pick it up? (yes/no) ");
    if (findTorch.toLowerCase() === "yes") {
        hasTorch = true;
        console.log("You picked up the torch.");
    } else {
        hasTorch = false;
        console.log("You leave the torch behind.");
    }

    const findSword = readline.question("Further ahead, you see a sword lying on the ground. Do you pick it up? (yes/no) ");
    if (findSword.toLowerCase() === "yes") {
        hasSword = true;
        console.log("You picked up the sword.");
    } else {
        console.log("You leave the sword behind.");
    }

    if (hasTorch) {
        console.log("You safely navigate through the dark mountains.");
        if (hasSword) {
            console.log("With the sword, you feel ready for any danger ahead.");
        }
        // Dragon encounter
        const dragonEncounter = readline.question("A dragon appears! Do you fight it? (yes/no) ");
        if (dragonEncounter.toLowerCase() === "yes") {
            if (hasSword && hasTorch) {
                console.log("You bravely fight the dragon with your sword and torch. You defeat the dragon!");
                // Kitten rescue
                const saveKitten = readline.question("You notice a kitten trapped behind the dragon. Do you save it? (yes/no) ");
                if (saveKitten.toLowerCase() === "yes") {
                    console.log("You rescue the kitten! It purrs happily and follows you.");
                } else {
                    console.log("You leave the kitten behind. Maybe someone else will help it.");
                }
            } else if (hasSword || hasTorch) {
                console.log("You put up a fight, but without both sword and torch, the dragon overpowers you.");
            } else {
                console.log("You have nothing to defend yourself. The dragon scares you away.");
            }
        } else {
            console.log("You avoid the dragon and sneak past.");
        }
    } else {
        console.log("It's too dark to proceed. You decide to turn back.");
    }
} else if (choice === "village" || hasMap) {
    console.log("You find your way to the village.");
} else {
    console.log("You get lost and wander aimlessly.");
}
console.log("Your adventure ends here. Thanks for playing!");// End of the adventure

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/