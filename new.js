
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
    "./models/taj-mahal.glb", 
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
    "./models/minar-final.glb", 
    "Qutub Minar", 
    "The Qutub Minar is the tallest brick minaret in the world, built in 1193 by Qutb-ud-din Aibak."
  );
}


function showTomb() {
  updateViewer(
    "./models/humanyun-tomb-final.glb", 
    "Humayun's Tomb", 
    "The Humayun's tomb (Persian: Maqbara-i Humayun) is the tomb of Mughal Emperor Humayun situated in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum under her patronage in 1558, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad, Persian architects chosen by her."
  );
}

function showGate() {
  updateViewer(
    "./models/gate.glb", 
    "India Gate", 
    "The India Gate is a war memorial located near the Rajpath on the eastern edge of the ceremonial axis of New Delhi."
  );
}



function showMandir() {
  updateViewer(
    "./models/ram_temple.glb", 
    "Ram Mandir", 
    "The Ram Mandir, is a Hindu temple complex in Ayodhya, Uttar Pradesh, India. Many Hindus believe that it is located at the site of Ram Janmabhoomi, the mythical birthplace of Rama, a principal deity of Hinduism."
  );
}


//history

const historyTaj = ()=>{
  document.querySelector("#historytitle").innerText = "Taj Mahal";
  document.querySelector("#historydesc").innerText = "The Taj Mahal: A Love Story with Marble, Tears & a LOT of Money Once upon a time in 17th-century India, there lived a Mughal emperor named Shah Jahan. He had many queens, but one of them was extra special 💖 — Mumtaz Mahal. She wasn’t just his wife; she was his best friend, advisor, shopping partner, and emotional support system all in one.But… plot twist 🎭 In 1631, Mumtaz Mahal died while giving birth to their 14th child (yes, FOURTEEN 😮). Shah Jahan was heartbroken. Legend says he cried so much that his hair turned white overnight. Instead of writing sad poems or listening to breakup songs, Shah Jahan said: “I will build the most beautiful monument on Earth for her.” And that’s how the Taj Mahal was born 🕌✨";
}


const historyRedfort = () => {
  document.querySelector("#historytitle").innerText = "Red Fort";
  document.querySelector("#historydesc").innerText = "The Red Fort: Shah Jahan’s Ultimate Bachelor Pad (Kind of) 🏰 After building the Taj Mahal, Shah Jahan decided Agra was too mainstream. So, he moved the capital to Delhi and built this massive red sandstone fortress to show off. It took 10 years to build (1638-1648) because... well, no cranes 🏗️. It was the VIP zone where the Mughal Emperors lived, partied, and ruled. Later, the British took over, but today, it’s where the Prime Minister raises the flag on Independence Day 🇮🇳. Basically, if walls could talk, these red ones would spill the tea on 300 years of power struggles! ☕";
}


const historyGate = () => {
  document.querySelector("#historytitle").innerText = "India Gate";
  document.querySelector("#historydesc").innerText = "India Gate: Not Just a Picnic Spot 🧺🥪 You might know it as the place to eat ice cream at 2 AM in Delhi, but it’s actually a huge emotional tribute. Designed by Sir Edwin Lutyens (the guy who designed half of New Delhi), it’s a war memorial for 70,000 soldiers who fought in WWI 🎖️. Look closely, and you’ll see thousands of names inscribed on the walls. It’s like the 'Arc de Triomphe' of India, but with more emotional weight and eternal flames (Amar Jawan Jyoti) 🔥. A true salute to the brave! 🫡";
}


const historyEllora = () => {
  document.querySelector("#historytitle").innerText = "Ellora Caves";
  document.querySelector("#historydesc").innerText = "Ellora Caves: The OG Minecraft Server ⛏️🗻 Imagine carving a massive temple out of a SINGLE giant rock... starting from the TOP down. No 'Ctrl+Z' if you make a mistake! 🚫💻. That’s the Kailasa Temple in Ellora (Cave 16). Built around the 8th century, these caves are the ultimate symbol of religious harmony, featuring Hindu, Buddhist, and Jain temples side-by-side 🤝. Aliens didn’t build this; ancient Indian engineers with hammers, chisels, and zero fear of heights did. Absolute legends. 💪";
}


const historyQutub = () => {
  document.querySelector("#historytitle").innerText = "Qutub Minar";
  document.querySelector("#historydesc").innerText = "Qutub Minar: The Medieval Skyscraper 🚀 In 1192, Qutb-ud-din Aibak wanted to build a 'Victory Tower' to flex his power. He built the first floor... and then passed away 💀. His son-in-law Iltutmish added three more floors, and later, Firoz Shah Tughlaq added the top bits. It’s 73 meters of brick and style! 🧱 Also, there’s an Iron Pillar nearby that hasn’t rusted in 1,600 years (ancient chemistry magic? 🧪). It’s the tallest brick minaret in the world and basically says: 'We are here to stay.' 😎";
}


const historyTomb = () => {
  document.querySelector("#historytitle").innerText = "Humayun's Tomb";
  document.querySelector("#historydesc").innerText = "Humayun's Tomb: The Prequel to the Taj Mahal 🎬 Before Shah Jahan built the Taj for his wife, a loving wife (Empress Bega Begum) built this stunning tomb for her husband, Humayun. Talk about setting the bar high! 💍 It was the first garden-tomb in India and looks suspiciously similar to the Taj Mahal because the Taj was actually inspired by THIS building 🤯. Fun fact: Humayun actually died because he tripped down his library stairs while rushing to prayer. Books can be dangerous, kids. 📚⚠️";
}


const historyGateway = () => {
  document.querySelector("#historytitle").innerText = "Gateway of India";
  document.querySelector("#historydesc").innerText = "Gateway of India: The 'Welcome' Mat of Mumbai 🌊⚓ Situated in Mumbai, this huge arch was built to welcome King George V and Queen Mary in 1911. Fun fact: The actual stone structure wasn't ready when they arrived, so they only saw a cardboard model! 📦😂. Completed in 1924, it’s a mix of Hindu and Muslim styles. It has a major irony: it was built to welcome the British monarchs, but in 1948, the very last British troops marched OUT of India through this exact gateway. Talk about a dramatic exit! 👋🇬🇧 Today, it’s the best place to feed pigeons and stare at the Taj Hotel. 🐦📸";
}


const historyMandir = () => {
  document.querySelector("#historytitle").innerText = "Ram Mandir";
  document.querySelector("#historydesc").innerText = "Ram Mandir: The Homecoming 🏹🚩 After a wait of roughly 500 years, Lord Ram finally returned to his birthplace in Ayodhya! The temple is a masterpiece of the Nagara style of architecture (no iron or steel used, just stone locking systems! 🗿). It’s not just a temple; it’s a massive cultural emotion for millions. The Pran Pratishtha in 2024 was basically Diwali x 1000 🪔. A modern marvel rooted in ancient faith. Jai Shree Ram! 🙏";
}



//timings
function updateInfo(titleText, contentHtml) {
  document.getElementById("title").innerText = titleText;
  document.getElementById("desc").innerHTML = contentHtml;
}


function timeTaj() {
  const html = `
    Timing: Opens 30 mins before sunrise, closes 30 mins before sunset.<br>
    <span class="text-warning">Closed on Fridays.</span><br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Tourist Type</th><th>Amount (Rs.)</th></tr>
      </thead>
      <tbody>
        <tr><td>Foreign Tourist</td><td>1100 + 200 (Mausoleum)</td></tr>
        <tr><td>SAARC/BIMSTEC</td><td>540 + 200 (Mausoleum)</td></tr>
        <tr><td>Indian/OCI</td><td>50 + 200 (Mausoleum)</td></tr>
      </tbody>
    </table>`;
  updateInfo("Taj Mahal", html);
}


function timeRedfort() {
  const html = `
    Timing: Sunrise to Sunset (approx 9:30 AM to 4:30 PM).<br>
    <span class="text-danger">Closed on Mondays.</span><br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Tourist Type</th><th>Amount (Rs.)</th></tr>
      </thead>
      <tbody>
        <tr><td>Foreign Tourist</td><td>600</td></tr>
        <tr><td>Indian/SAARC/BIMSTEC</td><td>50</td></tr>
        <tr><td>Children (below 15)</td><td>Free</td></tr>
      </tbody>
    </table>`;
  updateInfo("Red Fort", html);
}


function timeGate() {
  const html = `
    Timing: Open 24 Hours, 7 Days a week.<br>
    Best time to visit: Evening (Lighting starts at 7:00 PM).<br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Category</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Entry Fee</td><td><span class="text-success fw-bold">FREE</span></td></tr>
        <tr><td>Photography</td><td>Allowed</td></tr>
        <tr><td>Boating (nearby)</td><td>Rs. 100 - 150 (approx)</td></tr>
      </tbody>
    </table>`;
  updateInfo("India Gate", html);
}


function timeEllora() {
  const html = `
    Timing: Sunrise to Sunset (approx 6:00 AM to 6:00 PM).<br>
    <span class="text-danger">Closed on Tuesdays.</span><br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Tourist Type</th><th>Amount (Rs.)</th></tr>
      </thead>
      <tbody>
        <tr><td>Foreign Tourist</td><td>600</td></tr>
        <tr><td>Indian/SAARC/BIMSTEC</td><td>40</td></tr>
        <tr><td>Children (below 15)</td><td>Free</td></tr>
      </tbody>
    </table>`;
  updateInfo("Ellora Caves", html);
}


function timeQutub() {
  const html = `
    Timing: 7:00 AM to 9:00 PM (Daily).<br>
    <span class="text-warning">Open all days.</span><br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Tourist Type</th><th>Amount (Rs.)</th></tr>
      </thead>
      <tbody>
        <tr><td>Foreign Tourist</td><td>600</td></tr>
        <tr><td>Indian/SAARC/BIMSTEC</td><td>50</td></tr>
        <tr><td>Children (below 15)</td><td>Free</td></tr>
      </tbody>
    </table>`;
  updateInfo("Qutub Minar", html);
}


function timeTomb() {
  const html = `
    Timing: Sunrise to Sunset (Daily).<br>
    <span class="text-warning">Open all days.</span><br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Tourist Type</th><th>Amount (Rs.)</th></tr>
      </thead>
      <tbody>
        <tr><td>Foreign Tourist</td><td>600</td></tr>
        <tr><td>Indian/SAARC/BIMSTEC</td><td>50</td></tr>
        <tr><td>Children (below 15)</td><td>Free</td></tr>
      </tbody>
    </table>`;
  updateInfo("Humayun's Tomb", html);
}


function timeGateway() {
  const html = `
    Timing: Open 24 Hours (Best visited Morning or Evening).<br>
    Ferry rides available from 9:00 AM to 5:00 PM.<br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Category</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Entry Fee</td><td><span class="text-success fw-bold">FREE</span></td></tr>
        <tr><td>Ferry Ride</td><td>Rs. 100 - 150 approx</td></tr>
        <tr><td>Photography</td><td>Allowed</td></tr>
      </tbody>
    </table>`;
  updateInfo("Gateway of India", html);
}


function timeMandir() {
  const html = `
    Timing: 6:30 AM to 9:30 PM.<br>
    <strong>Aarti Timings:</strong> 6:30 AM (Jagaran), 12:00 PM (Bhog), 7:30 PM (Sandhya).<br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr><th>Category</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>General Entry</td><td><span class="text-success fw-bold">FREE</span></td></tr>
        <tr><td>Special Darshan</td><td>Pass required (Online/Offline)</td></tr>
        <tr><td>Locker Facility</td><td>Free</td></tr>
      </tbody>
    </table>`;
  updateInfo("Ram Mandir", html);
}