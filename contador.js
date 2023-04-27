const textArea = document.getElementById("text");
const charCount = document.getElementById("count");

textArea.addEventListener("input", () => {
  const text = textArea.value;
  const count = text.length;
  charCount.innerText = count;
});