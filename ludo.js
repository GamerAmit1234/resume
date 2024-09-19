// script.js
let currentPlayer = 1;
let currentSquare = 1;
let pieceId = 1;
let diceValue = 0;

// 3D Board Rotation
document.getElementById("board-3d").addEventListener("mouseover", () => {
    document.getElementById("board-3d").style.transform = "rotateX(60deg) rotateY(45deg) scale(1.1)";
});

document.getElementById("board-3d").addEventListener("mouseout", () => {
    document.getElementById("board-3d").style.transform = "rotateX(60deg) rotateY(45deg)";
});

// Piece Movement Animation
function movePiece() {
    const piece = document.getElementById(`player-${currentPlayer}-piece-${pieceId}`);
    piece.style.transform = `translate3d(${currentSquare * 50}px, 0, 0)`;
    piece.style.transition = "transform 0.5s";
}

// Dice Roll Animation
function rollDice() {
    const dice = document.getElementById("dice");
    dice.style.transform = "rotateX(360deg) rotateY(360deg)";
    dice.style.transition = "transform 1s";
    setTimeout(() => {
        diceValue = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice value: ${diceValue}`);
    }, 1000);
}

// Capturing Animation
function capturePiece() {
    const piece = document.getElementById(`player-${currentPlayer}-piece-${pieceId}`);
    piece.style.transform = "translate3d(100px, -50px, 0)";
    piece.style.transition = "transform 0.5s";
}

// Winning Animation
function checkWinningCondition() {
    if (winningConditionMet) {
        const winningPieces = document.querySelectorAll(`.player-${currentPlayer}-piece`);
        winningPieces.forEach((piece) => {
            piece.style.transform = "scale(1.5)";
            piece.style.transition = "transform 2s";
        });
    }
}

// Game Logic and Event Listeners
// ...