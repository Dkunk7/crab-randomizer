const weaponList = ["Auto Rifle", "Dual Shotguns", "Dual Pistols", "Auto Shotgun", "Burst Pistol", "Sniper", "Flamethrower", "Seagle", "Laser Cannons", "Crossbow", "Orb Launcher", "Rocket Launcher", "Minigun", "Blade Launcher", "Cluster Launcher", "Arcane Wand", "Marksman Rifle", "Ice Staff"];

const abilityList = ["Grenade", "Grappling Hook", "Black Hole", "Laser Beam", "Ice Blast", "Electro Globe"];

const meleeList = ["Claw", "Dagger", "Hammer", "Pickaxe"];

const init = () => {
    let container = document.querySelector("#content-container");

    let rollButton = document.createElement("button");
    rollButton.id = "rollButton";
    rollButton.type = "button";
    rollButton.textContent = "Randomize";

    let clearButton = document.createElement("button");
    clearButton.id = "clearButton";
    clearButton.type = "button";
    clearButton.textContent = "Clear";

    let resultDiv = document.createElement("div");
    resultDiv.id = "resultDiv";

    let weaponSlot = document.createElement("h2");
    weaponSlot.id = "Weapon";
    let abilitySlot = document.createElement("h2");
    abilitySlot.id = "Ability";
    let meleeSlot = document.createElement("h2");
    meleeSlot.id = "Melee";

    resultDiv.append(weaponSlot);
    resultDiv.append(abilitySlot);
    resultDiv.append(meleeSlot);

    container.append(rollButton);
    container.append(clearButton);
    container.append(resultDiv);

    rollButton.addEventListener("click", randomize);
    clearButton.addEventListener("click", clearAll);
}

const randomize = () => {
    console.log("randomize");
    clearResults();

    let weapon = pickRandom(weaponList);
    let ability = pickRandom(abilityList);
    let melee = pickRandom(meleeList);

    toHTML(weapon, "Weapon");
    toHTML(ability, "Ability");
    toHTML(melee, "Melee");
}

const pickRandom = array => {
    console.log("pickRandom")
    let randomNumber = Math.ceil(Math.random() * array.length);
    let result = array[randomNumber - 1];

    console.log(`${randomNumber} : ${result}`);
    return result;
}

const toHTML = (randomizedItem, itemType) => {
    console.log("toHTML")
    let resultDiv = document.querySelector("#resultDiv");
    let newH2 = document.querySelector(`#${itemType}`);
    newH2.innerHTML = `${itemType} : ${randomizedItem}`;
    resultDiv.append(newH2);
}

// Expects either "all" or "results"
const clearResults = () => {
    let weaponSlot = document.querySelector("#Weapon");
    let abilitySlot = document.querySelector("#Ability");
    let meleeSlot = document.querySelector("#Melee");

    weaponSlot.innerHTML = "Weapon :";
    abilitySlot.innerHTML = "Ability :";
    meleeSlot.innerHTML = "Melee :";
}

const clearAll = () => {
    let weaponSlot = document.querySelector("#Weapon");
    let abilitySlot = document.querySelector("#Ability");
    let meleeSlot = document.querySelector("#Melee");

    weaponSlot.innerHTML = "";
    abilitySlot.innerHTML = "";
    meleeSlot.innerHTML = "";
}

window.onload = init();