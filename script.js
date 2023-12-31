
const inputField = document.querySelector(".input");
const button = document.querySelector(".button");
const resultText = document.querySelector(".text");

button.addEventListener("click", () => {
  const inputText = inputField.value.toLowerCase();
  const reversedText = inputText.split("").reverse().join("");

  if (inputText === reversedText) {
    resultText.textContent = `"${inputText}" is a palindrome!`;
    resultText.style.color = "green"; // Add a visual indication for a palindrome
    resultText.style.display = "block";
  } else {
    resultText.textContent = `"${inputText}" is not a palindrome.`;
    resultText.style.color = "red"; // Visual indication for non-palindrome
    resultText.style.display = "block";
  }
});