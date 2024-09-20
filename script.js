const toggleSwitch = document.querySelector("#checkbox");

toggleSwitch.addEventListener("input", setTheme);

function setTheme() {
  const root = document.documentElement;
  const newTheme = (root.className =
    root.className === "dark" ? "light" : "dark");
  root.className = newTheme;
}

setTheme();
