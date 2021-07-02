const images=[
  "1.jpg",
  "2.jfif",
  "3.jfif",
  "4.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgimage=document.createElement("img");

bgimage.src=`img/${chosenImage}`
bgimage.className="back-ground";
document.body.prepend(bgimage);
