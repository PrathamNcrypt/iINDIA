function showTaj() {
  document.getElementById("viewer").src = "taj.glb";
  document.getElementById("title").innerText = "Taj Mahal";
  document.getElementById("desc").innerText =
    "The Taj Mahal is a symbol of eternal love built by Mughal Emperor Shah Jahan.";
}

function showRedFort() {
  document.getElementById("viewer").src = "qutub.glb";
  document.getElementById("title").innerText = "Red Fort";
  document.getElementById("desc").innerText =
    "Red Fort is a historic Mughal fort in Delhi and a UNESCO World Heritage Site.";
}

function showHampi() {
  document.getElementById("viewer").src = "konark.glb";
  document.getElementById("title").innerText = "Hampi Ruins";
  document.getElementById("desc").innerText =
    "Hampi was the capital of the Vijayanagara Empire, famous for its stone temples.";
}