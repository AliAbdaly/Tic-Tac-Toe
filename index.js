let boxes = document.querySelectorAll(".box");
let turn = "X";
let gameOver = false;

boxes.forEach((i) => {
  i.innerHTML = "";
  i.addEventListener("click", () => {
    if (!gameOver && i.innerHTML === "") {
      i.innerHTML = turn;
      cheakWin();
      cheakDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn == "X") {
    turn = "O";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0";
  }
}

function cheakWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let v0 = boxes[winConditions[i][0]].innerHTML;
    let v1 = boxes[winConditions[i][1]].innerHTML;
    let v2 = boxes[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 == v1 && v0 == v2) {
      gameOver = true;
      document.querySelector("#results").innerHTML = turn + " win";
      document.querySelector("#play-again").style.display = "inline";

      for (j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "#08d9d6";
        boxes[winConditions[i][j]].style.color = "#000";
      }
    }
  }
}

function cheakDraw() {
  if (!gameOver) {
    let Draw = true;
    boxes.forEach((i) => {
      if (i.innerHTML === "") Draw = false;
    });
    if (Draw) {
      gameOver = true;
      document.querySelector("#results").innerHTML = "Draw";
      document.querySelector("#play-again").style.display = "inline";
    }
  }
}

document.querySelector("#play-again").addEventListener("click", () => {
  gameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";

  boxes.forEach((i) => {
    i.innerHTML = "";
    i.style.removeProperty("background-color");
    i.style.color = "#fff";
  });
});
