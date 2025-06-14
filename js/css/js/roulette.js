// Добавьте этот код после slots.js
document.getElementById("game-container").innerHTML += `
  <div class="roulette">
    <h2>Рулетка</h2>
    <div class="roulette-wheel" id="roulette-wheel">🎰</div>
    <button onclick="playRoulette()">Ставка (100 ₽)</button>
  </div>
`;

function playRoulette() {
  if (balance < 100) {
    alert("Недостаточно средств!");
    return;
  }

  balance -= 100;
  updateBalance();

  const result = Math.random() > 0.5 ? "WIN" : "LOSE";
  const wheel = document.getElementById("roulette-wheel");

  wheel.style.animation = "spin 1s";
  setTimeout(() => {
    wheel.style.animation = "";
    if (result === "WIN") {
      balance += 200;
      wheel.textContent = "🎉 +200 ₽";
    } else {
      wheel.textContent = "💸 0 ₽";
    }
    updateBalance();
  }, 1000);
}
