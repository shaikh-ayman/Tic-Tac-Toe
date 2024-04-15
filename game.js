let btn = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let resetbtn = document.querySelector(".resetbutton");
let turnx = true;
let count = 0;
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X";
            turnx = false;
        }
        else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        count++;
        
        
        
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }

    })
})


const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const showwinner = (winner) => {
    msg.innerText = `♕winner is ${winner}♕ `;
    msg.classList.remove("hide");
    disableboxes();
}
const resetgame = () => {
    count=0;
    turnx = true;
    enableBoxes();
    msg.classList.add("hide");
    

}
const disableboxes = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
}
const gameDraw = () => {
    msg.innerText = `Game Draw!!!`;
    msg.classList.remove("hide");
    disableboxes();
    console.log("DRAW");
    


}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                return true;

            }
        }

    }

}
resetbtn.addEventListener("click", resetgame);

