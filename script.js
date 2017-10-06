var suspect = ["Alice", "The Mad Hatter", "Cheshire Cat", "Tweedledum", "Tweedledee"],
    weapons = ["a light saber", "the zombie virus", "a mallet", "a thorn", "the song that never ends",
    "Avada Kedavra!", "Katnis' bow and arrow", "a rope", "a katana", "a chicken bone",
    "a piece of glass", "dragon fire", "pixie dust", "a baseball bat", "Medusa's eyes",
    "King Arthur's sword", "the Autobots", "a phaser set to 'kill'", "a Pan Galactic Gargle Blaster", "a dementor"],
    where = ["the Forbidden Forest", "the Cathedral", "the watchtower", "bed", "Vulcan airspace",
    "USS Enterprise while Captain Picard said \"1 to beam up\"", "Red Mountain Park", "the iLab", "the Garden", "Serendipity"];

//I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
document.addEventListener("DOMContentLoaded", function () {
    var game=document.getElementById("#game");
    for (var i = 1; i <= 100; i++) {
        var randomSuspect = suspect[Math.floor(Math.random()*suspect.length)];
        var randomWeapon = weapons[Math.floor(Math.random()*weapons.length)];
        var randomLocation = where[Math.floor(Math.random()*where.length)];

        var h3 = document.createElement('h3');
        h3.innerText = 'Accusation ' + i;
        game.appendChild(h3);

        var clue = {
            suspect: randomSuspect,
            weapon: randomWeapon,
            where: randomLocation
        };

        h3.addEventListener('click', message.bind(clue));
    }

    function message(){
        alert("I accuse "+ this.suspect+ " ,with "+ this.weapon +" in "+ this.where);
    }
});