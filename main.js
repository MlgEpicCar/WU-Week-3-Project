const divFavs = ["Giraffes", "Dogs", "Horses", "Cats", "Birds"];
const divFear = ["Rhinoceros", "Tiger", "Spider", "Lion", "Shark"];

document.getElementById("h1").textContent = `Top Favorite Animals`;

document.getElementById("li0").textContent = divFavs[0];
document.getElementById("li1").textContent = divFavs[1];
document.getElementById("li2").textContent = divFavs[2];
document.getElementById("li3").textContent = divFavs[3];
document.getElementById("li4").textContent = divFavs[4];


document.getElementById("h2").textContent = `Top Feared Animals`;

document.getElementById("li5").textContent = divFear[0];
document.getElementById("li6").textContent = divFear[1];
document.getElementById("li7").textContent = divFear[2];
document.getElementById("li8").textContent = divFear[3];
document.getElementById("li9").textContent = divFear[4];

var img1 = document.createElement("img");
img1.src = "/images/giraffe.jpg";
var src = document.getElementById("img1");
src.appendChild(img1);

var img2 = document.createElement("img");
img2.src = "/images/rhino.jpg";
var src = document.getElementById("img2");
src.appendChild(img2);