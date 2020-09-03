const button = document.getElementById("button");
const section1 = document.querySelector(".first_section");
const section2 = document.querySelector(".second_section");
const art1 = document.querySelector(".art1");
const art2 = document.querySelector(".art2");
const art3 = document.querySelector(".art3");

button.addEventListener("click", () => {
  if (button.textContent === "Dark theme") {
    section1.style.backgroundColor = "rgb(108, 110, 110)";
    button.textContent = "Default theme";
    button.style.backgroundColor = "skyblue";
    section2.style.cssText = "background-color: black; color: white";
    art1.style.backgroundColor = "rgb(108, 110, 110)";
    art2.style.cssText = "background-color: black; color: white";
    art3.style.backgroundColor = "rgb(108, 110, 110)";
  } else {
    button.textContent = "Dark theme";
    button.style.backgroundColor = "rgb(108, 110, 110)";
    section1.style.backgroundColor = "skyblue";
    section2.style.cssText = "background-color: white; color: black";
    art1.style.backgroundColor = "skyblue";
    art2.style.cssText = "background-color: white; color: black";
    art3.style.backgroundColor = "skyblue";
  }
});
