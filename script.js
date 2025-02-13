//your JS code here. If required.
let inputField = document.getElementById("fname");

inputField.addEventListener("blur", function() {
  inputField.value = inputField.value.toUpperCase();
});
