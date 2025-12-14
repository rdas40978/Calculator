let string = "";
const display = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerHTML;
    try {
      if (buttonValue == "=") {
        string = new Function('return ' + string)();
        display.innerHTML = string;
      } else if (buttonValue == "AC") {
        string = "";
        display.innerHTML = string;
      } else if (buttonValue == "Del") {
        string = string.slice(0, -1);
        display.innerHTML = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        display.innerHTML = string;
      }
    } catch (error) {
      display.innerHTML = "Error";
      string = "";
    }
  });
});
