// === DOM Elements ===
const settingsPanel = document.getElementById("settingsPanel");
const openSettingsBtn = document.getElementById("openSettings");
const fontSizeSelect = document.getElementById("fontSize");
const themeSelect = document.getElementById("themeSelect");

// === Open/Close Panel ===
openSettingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
});

function closeSettings() {
  settingsPanel.classList.add("hidden");
}

// === Load Settings ===
function loadSettings() {
  const fontSize = localStorage.getItem("postly_fontSize") || "16px";
  const theme = localStorage.getItem("postly_theme") || "default";

  fontSizeSelect.value = fontSize;
  themeSelect.value = theme;

  applyFontSize(fontSize);
  applyTheme(theme);
}

function applyFontSize(size) {
  document.body.style.fontSize = size;
}

function applyTheme(theme) {
  if (theme === "default") {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffd700";
  } else if (theme === "dark") {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  } else if (theme === "light") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#111111";
  }
}

// === Save on Change ===
fontSizeSelect.addEventListener("change", (e) => {
  const size = e.target.value;
  localStorage.setItem("postly_fontSize", size);
  applyFontSize(size);
});

themeSelect.addEventListener("change", (e) => {
  const theme = e.target.value;
  localStorage.setItem("postly_theme", theme);
  applyTheme(theme);
});

// === Init ===
window.addEventListener("load", loadSettings);
