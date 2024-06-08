var imagArray = [
     "images/Untitled design (11).png",
     "images/Untitled design (12).png",
     "images/Untitled design (13).png",
     "images/Untitled design (14).png",
];


function randnuu() {
    var lengthImage = imagArray.length;
    var ranu = Math.floor(Math.random() * lengthImage);
    var randimag = imagArray[ranu];
    return randimag;
}

var image1 = document.getElementById("myimage");
image1.setAttribute("src", randnuu())
var image2 = document.getElementById("myimage2");
image2.setAttribute("src", randnuu())