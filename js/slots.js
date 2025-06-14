const symbols = ["🍒", "🍋", "🍊", "7", "💰", "💎"];
let balance = 1000;

function spin() {
  if (balance < 50) {
    alert("Пополните баланс!");
    return;
  }

  balance -= 50;
  updateBalance();

  const reels = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ];

  document.getElementById("game-container").innerHTML = `
    <div class="slot-reel">${reels[0]}</div>
    <div class="slot-reel">${reels[1]}</div>
    <div class="slot-reel">${reels[2]}</div>
  `;

  // Проверка выигрыша
  if (reels[0] === reels[1] && reels[1] === reels[2]) {
    const win = 500;
    balance += win;
    updateBalance();
    alert(`Джекпот! +${win} ₽`);
  }
}

function updateBalance() {
  document.getElementById("balance").textContent = balance;
}
