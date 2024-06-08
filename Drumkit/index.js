
for (var i=0; i<document.querySelectorAll(".drum").length;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", clickhandle)
function clickhandle(){
    var whichbtn = this.innerHTML
    console.log(whichbtn)
   if (whichbtn == "w"){
    var sound = new Audio("sounds/crash.mp3")
    sound.play()
   }
   else if(whichbtn == "a") {
    var sound = new Audio("sounds/kick-bass.mp3")
    sound.play()
   }
   
}
}