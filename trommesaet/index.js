//finder ud af hvor mange knapper der findes med class'en 'drum', i dette tilfælde 7
var numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i  < numberOfButtons; i++){

//når man klikker på knapperne bliver der spillet en lyd og vist en animation for den "aktive/valgte" knap
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;
  
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

})
    
}

//man kan bruge tastaturet/"keypress" til at "aktivere" lyden og animationen hvor den enkelte knap
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
})

// uddeler en lyd til  de forskellige knapper/keys
function makeSound(key){

   switch (key) {
       case "w":
           let tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
         case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();                
            break;
        case "k":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();                
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();                
            break;

        default:
            break;
   }

}
//animerer den knap man trykker på
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");

    },150)//længden af animationen
}