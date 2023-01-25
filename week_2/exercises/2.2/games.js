// 3 game objects and details
const myGameOne = { title: "Animal Crossing", type: "Communication Game", numberOfPlayers: "One", rating: "200%", shortDescription: "the player starts out with little more than a tent and some basic tools, so to create their dream town, they'll need to forage, collect and save" };
console.log("Game One Details", myGameOne);

const myGameTwo = { title: "Toontown", type: "Massively Multiplayer Online Role-playing Game", numberOfPlayers: "Unlimited", rating: "300%", shortDescription: "users create their own Toon and join the never-ending battle against the Cogs, who want to turn Toontown into their latest business venture"};
console.log("Game Two Details", myGameTwo);

const myGameThree = {title:"Crash Team Racing Nitro-Fueled", type:"Kart Racing Game", numberOfPlayers:"4", rating:"100%", shortDescription:"is a kart racing game in which the player takes control of one of the playable characters from the Crash Bandicoot series, all of whom drive karts of various specifications, on obstacle-based racetracks"};
console.log("Game Three Details", myGameThree);

// user input number
const pickNumber = parseInt(window.prompt("Pick a number between 1 and 3 and I'll tell you about the game that corresponds to that number!"));
console.log("user chose the number ", pickNumber);

if (pickNumber === 1){
    window.alert("You have selected " + myGameOne.title + ", which is a " + myGameOne.type + ". I have personally given this game a rating of " + myGameOne.rating + ". In Animal Crossing " + myGameOne.shortDescription + ".");
}

if (pickNumber === 2){
    window.alert("You have selected " + myGameTwo.title + ", which is a " + myGameTwo.type + ". I have personally given this game a rating of " + myGameTwo.rating + ". In Toontown " + myGameTwo.shortDescription + ".");
}

if (pickNumber === 3){
    window.alert("You have selected " + myGameThree.title + ", which is a " + myGameThree.type + ". I have personally given this game a rating of " + myGameThree.rating + ". Crash Team Racing Nitro-Fueled " + myGameThree.shortDescription + ".");
}

if (pickNumber > 3){
    window.alert("Not today, Satan!")
}

if (pickNumber < 1){
    window.alert("Not today, Satan!")
}