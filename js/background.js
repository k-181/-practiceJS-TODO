const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = "100vw";
bgImage.style.height = "100vh";

const randomBgImage = document.body.appendChild(bgImage);
document.body.style.backgroundImage = randomBgImage;