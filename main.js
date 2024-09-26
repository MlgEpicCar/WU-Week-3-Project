const divFavs = ["Giraffes", "Dogs", "Horses", "Cats", "Birds"];
const divFear = ["Rhinoceros", "Tiger", "Spider", "Lion", "Shark"];

ul = document.createElement('ul');
ul.setAttribute("id", "divFavs");

document.getElementById("h1").textContent = `Top Favorite Animals`; // h1

for (let i = 0; i < 5; i++) {
    li = document.createElement("li"); // creates list item
    li.innerText = divFavs[i]; // puts String from array into list item
    document.getElementById("divFavs").appendChild(li); // appends list item
}

document.getElementById("h2").textContent = `Top Feared Animals`;

for (let i = 0; i < 5; i++) {
    li = document.createElement("li");
    li.innerText = divFear[i];
    document.getElementById("divFear").appendChild(li);
}

var img1 = document.createElement("img");
img1.src = "/images/giraffe.jpg";
var src = document.getElementById("img1");
src.appendChild(img1);

var img2 = document.createElement("img");
img2.src = "/images/rhino.jpg";
var src = document.getElementById("img2");
src.appendChild(img2);