function login() {
  alert("Login successful (simulated)");
}

function generateGame() {
  const prompt = document.getElementById("gamePrompt").value;
  const log = document.getElementById("gameLog");
  log.innerHTML = "🧠 Generating: " + prompt + "<br>✅ AI logic added! (Simulated)";
}