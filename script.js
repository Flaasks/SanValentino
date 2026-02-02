const question = document.getElementById("question");
const hint = document.getElementById("hint");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}

if (noBtn) {
  noBtn.addEventListener("click", () => {
    alert("Forse non capisci bene l'inglese, riprova...");
    question.textContent = "Vuoi essere la mia valentina?";
    hint.textContent = "Scegli bene stavolta...";
  });
}
