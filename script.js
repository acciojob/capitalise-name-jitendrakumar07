//your JS code here. If required.
const input = document.getElementById("fname");
input.addEventListener("blur", () => {
  let val = input.value;
  input.value = val.toUpperCase();
});
