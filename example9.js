var playerOne = document.querySelector("#player-1");
var playerTwo = document.querySelector("#player-2");
var btnPlayerOne = document.querySelector("#btn-player-1");
var btnPlayerTwo = document.querySelector("#btn-player-2");
var btnReset = document.querySelector("#btn-reset");
var limitSet = document.querySelector("#limit-set");
var limit = document.querySelector("#limit");


limitSet.addEventListener("change", function(){
    limit.textContent = limitSet.value
});

function playerClick(player){
    if (Number(player.textContent) < limitSet.value) {
        player.textContent = Number(player.textContent) + 1;
    };
}

function checkWinner() {
    if (Number(playerOne.textContent) > Number(playerTwo.textContent) && (Number(playerOne.textContent) == limitSet.value)) {
        playerOne.classList.add("winner");
    }
    else if(Number(playerOne.textContent) < Number(playerTwo.textContent) && (Number(playerTwo.textContent) == limitSet.value)) {
        playerTwo.classList.add("winner");
    }
}

btnPlayerOne.addEventListener("click", function(){
    playerClick(playerOne);
    checkWinner();
});



btnPlayerTwo.addEventListener("click", function(){
    playerClick(playerTwo);
    checkWinner();
})

btnReset.addEventListener("click", function(){
    playerOne.textContent = 0;
    playerTwo.textContent = 0
    playerOne.classList.remove("winner")
    playerTwo.classList.remove("winner")
})