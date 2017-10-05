var suspects, weapons, where;
suspect = ["Alice", "The Mad Hatter", "Cheshire Cat", "Tweedledum", "Tweedledee"];
weapons = ["a light saber", "the zombie virus", "a mallet", "a thorn", "the song that never ends",
    "Avada Kedavra!", "Katnis' bow and arrow", "a rope", "a katana", "a chicken bone",
    "a piece of glass", "dragon fire", "pixie dust", "a baseball bat", "Medusa's eyes",
    "King Arthur's sword", "the Autobots", "a phaser set to 'kill'", "Pan Galactic Gargle Blaster", "a dementor"];
where = ["the Forbidden Forest", "the Cathedral", "the watchtower", "bed", "Vulcan airspace",
    "the bridge of the Enterprise", "Red Mountaint Park", "the iLab", "the Garden", "Serendipity"];
//I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
document.addEventListener("DOMContentLoaded", function () {
    for (var i = 1; i <= 100; i++) {
        accusations(i);
    }
    function accusations(number) {
        var accusation = document.createElement("h3");
        accusation.innerHTML = "Accusation " + [i];
        accusation.id = "accusation-" + [i];
        document.body.appendChild(accusation);
    }
})