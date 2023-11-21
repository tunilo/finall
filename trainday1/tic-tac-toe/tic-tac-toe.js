alert('It\'s a draw!');
document.addEventListener('DOMContentLoaded', function () {
  const board = document.getElementById('game-board');
  const cells = Array.from(document.querySelectorAll('.cell'));

  let currentPlayer = 'X';
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
  });

  function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
      gameBoard[index] = currentPlayer;
      cells[index].textContent = currentPlayer;

      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
      } else if (gameBoard.every(cell => cell !== '')) {
        alert('It\'s a draw!');
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  function checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
  }
});
