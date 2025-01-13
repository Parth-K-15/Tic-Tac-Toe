let boxes = document.querySelectorAll(".boxes");
let playerO = true;

let Winner = document.querySelector(".Winner-Name");
let resetBut = document.querySelector(".reset-butt");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO === true) {
            box.innerText = "O";
            playerO = false;
        }
        else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if (val1!="" && val2 != "" && val3 != ""){
            if (val1 === val2 && val2 === val3){
                console.log(`Winner is Player${val1}`);
                Winner.innerText = `Winner is Player${val1}`;
                ShowWinner();
            }
        }
    }
};

const ShowWinner = () => {
    Winner.classList.remove("hide");
    disableButtons();
}

const disableButtons = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

resetBut.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
    Winner.classList.add("hide");
})