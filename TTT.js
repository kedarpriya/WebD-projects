let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0,1,2],[0,3,6,],[0,4,8],[3,4,5],[1,4,7],[2,4,6],[6,7,8],[2,5,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
   
});
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the Winner is ${winner} !`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner!",pos1Val);
                showWinner(pos1Val)
                
            }
        }
    }
    
};
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);