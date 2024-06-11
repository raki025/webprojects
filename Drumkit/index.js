//selecting class .drum to target all buttons
// finding button click
for (var i=0; i<document.querySelectorAll(".drum").length;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function clickhandle(){
        var whichbtn = this.innerHTML;

        // makesound function call back it take the click value 
        makesound(whichbtn);

        //callback function for animation

        btnanimation(whichbtn);
    });

};
//finding the keypress

document.addEventListener("keypress", function(event) {
    // makesound function call back it take the keypress value 
    makesound(event.key);

    //callback function for animation
    btnanimation(event.key);
});

// making sound on keypress and mosue  click
function makesound(key){
switch (key) {
    case "w":
        var sound1 = new Audio("sounds/crash.mp3");
        sound1.play();
        break;
    

        case "a":
        var sound2 = new Audio("sounds/kick-bass.mp3");
        sound2.play();
        break;

        case "s":
        var sound3 = new Audio("sounds/snare.mp3");
        sound3.play();
        break;

        case "d":
        var sound4 = new Audio("sounds/tom-1.mp3");
        sound4.play();
        break;

        case "j":
        var sound5 = new Audio("sounds/tom-2.mp3");
        sound5.play();
        break;

        case "k":
        var sound6 = new Audio("sounds/tom-3.mp3");
        sound6.play();
        break;

        case "l":
        var sound7 = new Audio("sounds/tom-4.mp3");
        sound7.play();
        break;
    default:
        console.log("error");
        break;
   }
}


//button animation 
function btnanimation(currentkey) {
    // here it will take the button pressed or clicked then add a css class pressed to it 
    var activebtn = document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    // it remove the css class after 100milisec 
    setTimeout( function removeani() {
        activebtn.classList.remove("pressed")
        
    }, 100  )
};