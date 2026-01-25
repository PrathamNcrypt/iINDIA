
function updateViewer(modelPath, titleText, descText) {
  const viewer = document.getElementById("viewer");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  
  viewer.src = modelPath;
  title.innerText = titleText;
  desc.innerText = descText;
}


function showTaj() {
  updateViewer(
    "./models/taj-mahal.gltf", 
    "Taj Mahal", 
    "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra."
  );
}


function showRedfort() {
  updateViewer(
    "./models/redfort.glb", 
    "Red Fort", 
    "The Red Fort (Lal Qila) is a historic fort in Old Delhi that served as the main residence of the Mughal Emperors."
  );
}


function showEllora() {
  updateViewer(
    "./models/ellora.glb", 
    "Ellora Caves", 
    "The Ellora Caves are a UNESCO World Heritage Site in Aurangabad, featuring Hindu, Buddhist, and Jain monuments."
  );
}


function showQutub() {
  updateViewer(
    "./models/qutub-minar.gltf", 
    "Qutub Minar", 
    "The Qutub Minar is the tallest brick minaret in the world, built in 1193 by Qutb-ud-din Aibak."
  );
}


function showTomb() {
  updateViewer(
    "./models/humayun-tomb.gltf", 
    "Humanyun Tomb", 
    "THumayun's tomb (Persian: Maqbara-i Humayun) is the tomb of Mughal Emperor Humayun situated in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum under her patronage in 1558, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad, Persian architects chosen by her."
  );
}