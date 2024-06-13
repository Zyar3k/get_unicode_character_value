function detectChar() {
  let text = document.getElementById("inputText").value;

  if (text) {
    const unicodeValue = text.charCodeAt(0);
    const result = `The Unicode value of the character "${text}" is ${unicodeValue}.`;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = "Please Enter a character";
  }
}
