//C2GS Site By Adam Gincel
//To add more gifs to the front page rotation, just add to this array. ["gfycat.com/ifr/namenamename", "game name"],
var myGfys = [
	["https://gfycat.com/ifr/TepidSkeletalIlsamochadegu", "Super Smash Bros. Melee"],
	["https://gfycat.com/ifr/RegalAthleticBluebreastedkookaburra", "Super Smash Bros. for Wii U"],
];

var a = -1;

window.onload = function() {
	a = Math.floor(Math.random() * (myGfys.length - 1));

	fillGifIndicator();
	nextGfy();
}

function prevGfy() {
	var gfy = document.getElementById("gfy");
	a -= 1;
	if (a < 0)
		a = myGfys.length - 1;
	gfy.src = myGfys[a][0];

	updateIndicators();
}

function nextGfy() {
	var gfy = document.getElementById("gfy");
	a = Math.floor((a + 1) % myGfys.length);
	chosenGfy = myGfys[a][0];
	console.log(a);

	gfy.src = chosenGfy;

	updateIndicators();
}

function fillGifIndicator() {
	var gifIndicator = document.getElementById("gifIndicator");

	var htmlString = "";
	for (var i = 0; i < myGfys.length; i++) {
		htmlString += "<div class=\"indicator";

		if (i == a) {
			htmlString += " active";
		}

		htmlString += "\" id=\"indicator" + i.toString() + "\"></div>";
	}

	gifIndicator.innerHTML = htmlString;
}

function updateIndicators() {
	for (var i = 0; i < myGfys.length; i++) {
		var ind = document.getElementById("indicator" + i.toString());
		ind.classList.remove("active");

		if (i == a) 
			ind.classList.add("active");
	}

	document.getElementById("gifTitle").innerHTML = myGfys[a][1];
}