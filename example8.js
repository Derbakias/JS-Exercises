var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
    if(isPurple){
        document.body.style.backgroundColor = "white";
        isPurple = false;
    }
    // if white
    // make it purple
    // else
    // make it white
    else {
        document.body.style.backgroundColor = "purple";
        isPurple = true;
    }
});