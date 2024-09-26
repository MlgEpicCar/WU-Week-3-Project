const divFavs = ["Giraffes", "Dogs", "Horses", "Cats", "Birds"];
const divFear = ["Rhinoceros", "Tiger", "Spider", "Lion", "Shark"];

document.getElementById("h1").textContent = `Top Favorite Animals`;

for (let i = 0; i < 5; i++) {
    li = document.createElement("li");
    li.innerText = divFavs[i];
    document.getElementById("divFavs").appendChild(li);
}

document.getElementById("h2").textContent = `Top Feared Animals`;

for (let i = 0; i < 5; i++) {
    li = document.createElement("li");
    li.innerText = divFear[i];
    document.getElementById("divFear").appendChild(li);
}

img1 = document.createElement("img");
img1.src = "/images/giraffe.jpg";
src = document.getElementById("img1");
src.appendChild(img1);

img2 = document.createElement("img");
img2.src = "/images/rhino.jpg";
src = document.getElementById("img2");
src.appendChild(img2);