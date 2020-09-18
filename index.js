//detecting button press

var lengths=document.querySelectorAll(".drum").length;
//addEventListener is useful whenever we click or press key to make contact with function
//hence addEventListener is higher order function
for(var i=0;i<lengths;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //this.style.color="white";//this means whichever button is pressed
    var x =this.innerHTML;
     makeSound(x);//which button pressed
     buttonAnimation(x);

  });
}
//detecting keyboard press
document.addEventListener("keydown",function(event){
 makeSound(event.key);//to know which key is pressed on keyboard
 buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
    var snd = new Audio("sounds/crash.mp3");
    snd.play();
    break;
    case "a":
    var snd = new Audio("sounds/kick-bass.mp3");//this is object as we use in java
    snd.play();
    break;
    case "s":
    var snd = new Audio("sounds/snare.mp3");
    snd.play();
    break;
    case "d":
    var snd = new Audio("sounds/tom-1.mp3");
    snd.play();
    break;
    case "j":
    var snd = new Audio("sounds/tom-2.mp3");
    snd.play();
    break;
    case "k":
    var snd = new Audio("sounds/tom-3.mp3");
    snd.play();
    break;
    case "l":
    var snd = new Audio("sounds/tom-4.mp3");
    snd.play();
    break;
    default:console.log(x);

  }
}
 function buttonAnimation(currentkey){
   //to make button flash
   var activeButton=document.querySelector("." + currentkey);
   activeButton.classList.add("pressed");//pressed class in css applied
   //to set  button unpressed
   setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
 }
