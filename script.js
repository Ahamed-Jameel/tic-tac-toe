let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const statusDisplay = document.getElementById('game-status');
const cells = document.querySelectorAll('.cell');
const endScreen = document.getElementById('end-screen');
const endMessage = document.getElementById('end-message');

function makeMove(index){
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      endScreen.style.display = 'block';
      endMessage.textContent = `${currentPlayer} Wins!`;
      gameActive = false;
      return;
    } else if (gameBoard.every(cell => cell !== '')) {
      endScreen.style.display = 'block';
      endMessage.textContent = 'It\'s a Draw!';
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner(){
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame(){
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusDisplay.textContent = `Player X's turn`;
  cells.forEach(cell => cell.textContent = '');
  endScreen.style.display = 'none';  // Hide the result screen
}
