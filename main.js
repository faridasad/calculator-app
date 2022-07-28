const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button");

let isFinished = false;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isFinished === true) {
      output.textContent = "";
      isFinished = false;
    }
    switch (e.target.textContent) {
      case "DEL":
        output.textContent = output.textContent.slice(0, -1);
        break;
      case "RESET":
        output.textContent = "";
        break;
      case "=":
        try {
          output.textContent = output.textContent.replace(/x/g, "*");
          output.textContent = eval(output.textContent);
        } catch (error) {
          output.textContent = "TRY AGAIN";
          isFinished = true;
        }
        break;
      default:
        output.textContent += e.target.textContent;
    }
  });
});

/* Theme stuff */

const themes = document.querySelectorAll(".theme");
const body = document.querySelector("body");
body.setAttribute("data-theme", localStorage.getItem("data-theme"));

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    body.setAttribute("data-theme", theme.dataset.id);
    localStorage.setItem("data-theme", theme.dataset.id);
  });
});
