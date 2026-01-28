
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





//hourglass


const dayPlan = () => {
    
    let timeInput = document.querySelector("#hoursInput");
    let planText = document.querySelector(".card-text-custom");
    let citySelect = document.querySelector("#citySelect");
    let title =  document.querySelector("#cardTitle");
    let nav =    document.querySelector("#map");

    let hours = parseInt(timeInput.value);
    
    let city = citySelect.value;
    
    if(citySelect.value==="Delhi"){
      title.innerText = "Delhi";
          nav.onclick = null;             
        nav.style.display = "inline-block"; 
        nav.innerText = "Navigate";         
        planText.style.color = "#060101";   
      if (hours === "") {
        planText.innerText = "Please enter a number first!";
        planText.style.color = "red";
      } else if (hours <= 2) {
        planText.innerHTML = `<strong>Honestly? Don't try to be a hero with the traffic. 🛑</strong><br><br>With just 2 hours, head straight to <strong>Sunder Nursery</strong>. It's Delhi's "Central Park" and the ultimate aesthetic spot.<br><br><strong>The 2-Hour Breakdown:</strong><br>1. ☕ <strong>0-30 Mins:</strong> Grab an artisanal coffee at <em>Fab Cafe</em> by the lake.<br>2. 📸 <strong>30-90 Mins:</strong> Walk the Mughal ruins. The <em>Sunder Burj</em> is perfect for photos.<br>3. 🌿 <strong>Last 30 Mins:</strong> Just sit on the grass near the fountains. The vibe is unmatched.`;
        nav.href =
          "https://www.google.com/maps/search/Sunder+Nursery+Cafe+Delhi";
        planText.style.color = "#555";
      } else if (hours === 3) {
        planText.innerHTML = `<strong>Okay, skip the malls. You need to see the "Other" Delhi. 🥟</strong><br><br>Take a cab straight to <strong>Majnu Ka Tila (MKT)</strong>. It’s basically a portal to Tibet tucked away in North Delhi.<br><br><strong>The 3-Hour Breakdown:</strong><br>1. 🍜 <strong>0-45 Mins:</strong> Start with spicy <em>Laphing</em> from the street stalls. It's a rite of passage.<br>2. ☕ <strong>45-90 Mins:</strong> Grab a table at <strong>Ama Café</strong>. Order the pancakes and soak in the aesthetics.<br>3. 👟 <strong>Last Hour:</strong> Raid the basement shops for cheap, trendy streetwear (bargaining is key).`;
        nav.href = "https://www.google.com/maps/search/Majnu+Ka+Tilla+Ama+Cafe";
        nav.innerText = "Take me to MKT 📍";
        planText.style.color = "#555";
      } else if (hours === 4) {
        planText.innerHTML = `<strong>This is the "Main Character" itinerary. 🎬</strong><br><br>Four hours is the perfect time to head to <strong>Qutub Minar</strong> in Mehrauli. It is where history meets luxury.<br><br><strong>The 4-Hour Breakdown:</strong><br>1. 🏛️ <strong>First 90 Mins:</strong> Walk the complex. See the Iron Pillar and get those golden hour shots.<br>2. 🚶‍♂️ <strong>Next 30 Mins:</strong> Walk over to the <strong>Mehrauli Rooftop District</strong> (it looks like Europe).<br>3. 🍹 <strong>Last 2 Hours:</strong> Secure a table at <em>Dramz</em> or <em>Bo Tai</em>. Watching the Qutub light up at night? Unmatched.`;
        nav.href = "https://www.google.com/maps/search/rooftop+restaurants+near+Qutub+Minar";
        nav.innerText = "Find Rooftops with View 🍷";
      } else if(hours===5){
        planText.innerHTML = `<strong>You have 5 hours? Go to the heart of Delhi. ❤️</strong><br><br>It’s time for <strong>Connaught Place (CP)</strong>. It’s the white colonial circle where Delhi has met for decades.<br><br><strong>The 5-Hour Breakdown:</strong><br>1. 🛍️ <strong>First 2 Hours:</strong> Bargain hard at <strong>Janpath Market</strong> (the street fashion is insane).<br>2. 🥐 <strong>Next 1 Hour:</strong> Walk to Inner Circle. Grab a patty at <strong>Wenger's Deli</strong> or a shake at Keventers.<br>3. 🌳 <strong>Last 2 Hours:</strong> Sit in <strong>Central Park</strong> under the giant flag. It's the ultimate people-watching spot.`;
        nav.href = "https://www.google.com/maps/dir/?api=1&origin=Janpath+Market&destination=Central+Park+Connaught+Place&waypoints=Wenger%27s+Deli+Connaught+Place%7CKeventers+Connaught+Place&travelmode=walking";
        nav.innerText = "Go to CP & Janpath 🛍️";
      }else if (hours === 6 ) {
        planText.innerHTML = `<strong>6 hours? That's luxury. Welcome to South Delhi. 🦢</strong><br><br>Head straight to <strong>Hauz Khas Village (HKV)</strong>. It’s the only place where 13th-century ruins meet 2026 hipster culture.<br><br><strong>The 6-Hour Breakdown:</strong><br>1. 🦌 <strong>First 90 Mins:</strong> Start at <strong>Deer Park</strong> (yes, there are real spotted deer).<br>2. 🏰 <strong>Next 2 Hours:</strong> Walk into the <strong>Hauz Khas Fort</strong>. Sit by the lake and take those aesthetic "main character" photos.<br>3. 🍹 <strong>Last 2.5 Hours:</strong> End the day at a lake-facing cafe like <strong>Social</strong> or <strong>Coast Cafe</strong>.`;
        nav.href = "https://www.google.com/maps/search/Hauz+Khas+Village+Fort+and+Lake+View+Cafes";
        nav.innerText = "Explore HKV 🦢";
      }else if(hours===8){
        planText.innerHTML = `<strong>You have 8 hours? Brave soul. Let's do Old Delhi. 🍛</strong><br><br>For a full 8-hour shift, there is only one correct answer: <strong>Purani Dilli (Old Delhi)</strong>.<br><br><strong>The 8-Hour Breakdown:</strong><br>1. 🕌 <strong>First 2 Hours:</strong> Explore the massive <strong>Jama Masjid</strong> and climb the minaret for the view.<br>2. 🏰 <strong>Next 3 Hours:</strong> Walk to the <strong>Red Fort</strong>. It’s huge, so take your time exploring the history.<br>3. 🥘 <strong>Last 3 Hours:</strong> Dive into <strong>Chandni Chowk</strong>. Hit <em>Paranthe Wali Gali</em>, <em>Natraj Dahi Bhalle</em>, and end with <em>Daulat Ki Chaat</em>.`;
        nav.href = "https://www.google.com/maps/dir/?api=1&origin=Red+Fort+Delhi&destination=Paranthe+Wali+Gali&waypoints=Jama+Masjid%7CChandni+Chowk&travelmode=walking";
      }else if(hours===7){
        planText.innerHTML = `<strong>7 hours? Let's do something sophisticated yet relaxed. 🎨</strong><br><br>Skip the noise. We are going to the <strong>Pragati Maidan</strong> belt. It’s artistic, peaceful, and has amazing food.<br><br><strong>The 7-Hour Breakdown:</strong><br>1. 🏺 <strong>First 2.5 Hours:</strong> Explore the <strong>National Crafts Museum</strong>. It’s an open-air village showing art from all over India.<br>2. 🍛 <strong>Next 1.5 Hours:</strong> Lunch at <strong>Cafe Lota</strong> (inside the museum). You <em>must</em> try the Palak Patta Chaat.<br>3. 🏰 <strong>Last 3 Hours:</strong> Walk to <strong>Purana Qila (Old Fort)</strong> nearby. Rent a boat on the lake or just walk the massive ramparts.`;
        nav.href = "https://www.google.com/maps/dir/?api=1&origin=National+Crafts+Museum+%26+Hastkala+Academy&destination=Purana+Qila&waypoints=Cafe+Lota&travelmode=walking";
      }else if (hours >= 9 && hours <= 11){
       planText.innerHTML = `<strong>A full day of aesthetics? Say less. 📸</strong><br><br>This is the "South Delhi" day out that everyone loves. It blends art, food, and history perfectly.<br><br><strong>The 9-11 Hour Breakdown:</strong><br>1. 🎨 <strong>First 2 Hours:</strong> Walk through <strong>Lodhi Art District</strong>. It's an open-air graffiti museum perfect for photos.<br>2. 🍝 <strong>Next 2.5 Hours:</strong> Head to <strong>Khan Market</strong>. Eat pasta at <em>The Big Chill</em> and browse the luxury bookshops.<br>3. 🕌 <strong>Next 3 Hours:</strong> Walk to <strong>Humayun's Tomb</strong> nearby. It looks magical at golden hour.<br>4. 🇮🇳 <strong>Remaining Time:</strong> End at <strong>India Gate / Kartavya Path</strong> for a late-night ice cream walk.`;
        nav.href = "https://www.google.com/maps/dir/Lodhi+Art+District,+18,+Lodhi+Rd,+Gokalpuri,+Institutional+Area,+Lodi+Colony,+New+Delhi,+Delhi+110003/The+Big+Chill+Cafe,+35,+Khan+Market,+Rabindra+Nagar,+New+Delhi,+Delhi+110003/Humayun%E2%80%99s+Tomb,+Hazrat+Nizamuddin+Aulia+Dargah,+Mathura+Rd,+Nizamuddin,+Nizamuddin+East,+New+Delhi,+Delhi+110013/India+Gate,+Kartavya+Path,+India+Gate,+New+Delhi,+Delhi+110001/@28.5991167,77.2164019,14z/data=!3m1!4b1!4m26!4m25!1m5!1m1!1s0x390ce3153812bcf7:0x9d9a5ec4d7038b3e!2m2!1d77.2233349!2d28.5853628!1m5!1m1!1s0x390ce2e817b6b095:0x42073d0272f308d1!2m2!1d77.2275794!2d28.6005917!1m5!1m1!1s0x390ce31ce8460ba7:0xb9f1ba2d3bdfa80d!2m2!1d77.2507492!2d28.5932848!1m5!1m1!1s0x390ce2daa9eb4d0b:0x717971125923e5d!2m2!1d77.2295097!2d28.612912!3e0?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D";

      }else if(hours===12){
       planText.innerHTML = `<strong>12 hours? You are a legend. Let's do the "Soul of Delhi" run. 🧘‍♂️</strong><br><br>This covers the peace, the food, and the grand finale.<br><br><strong>The 12-Hour Breakdown:</strong><br>1. 👳‍♂️ <strong>First 3 Hours:</strong> Start at <strong>Bangla Sahib Gurudwara</strong>. Sit by the Sarovar and have the holy <em>Kadha Prasad</em>.<br>2. 🛍️ <strong>Next 3 Hours:</strong> Head to <strong>Dilli Haat INA</strong> for lunch. Try the <em>Nagaland Momos</em> or <em>Kashmir Wazwan</em>.<br>3. 🎆 <strong>Last 6 Hours:</strong> Go to <strong>Akshardham Temple</strong>. It is massive. Do the boat ride and stay for the breathtaking <em>Water Show</em> at night.`;
        nav.innerText = "Start The Grand Tour 🚩";
        nav.href = "https://www.google.com/maps/dir/Gurdwara+Bangla+Sahib,+Hanuman+Road+Area,+Connaught+Place,+New+Delhi,+Delhi+110001/Dilli+Haat+-+INA,+INA+Market,+Dilli+Haat,+Kidwai+Nagar+West,+Kidwai+Nagar,+New+Delhi,+Delhi+110023/Swaminarayan+Akshardham,+NH+24,+Pramukh+Swami+Maharaj+Marg,+Pandav+Nagar,+New+Delhi,+Delhi,+110092/@28.595414,77.2037775,13z/data=!3m1!4b1!4m20!4m19!1m5!1m1!1s0x390cfd9eccc07d2d:0x6db044e71b8e8e3b!2m2!1d77.2089518!2d28.6258652!1m5!1m1!1s0x390ce2630d16739d:0xf353c316c564a004!2m2!1d77.2075473!2d28.5733233!1m5!1m1!1s0x390ce35b9975b1fb:0x69a09f265ef3b22a!2m2!1d77.2772619!2d28.6126735!3e0?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D";

      }

    }

if(citySelect.value !== "Delhi"){
       
       title.innerText = `${city} - Coming Soon 🚀`;
       
       planText.innerHTML = `<strong>Service Currently Unavailable in this Region. 🌐</strong><br><br>We are currently piloting our premium itinerary planner exclusively in Delhi. Our team is working with local experts in <strong>${city}</strong> to curate high-standard experiences.<br><br><strong>Status:</strong> Data collection in progress. Expansion scheduled for late 2026.`;

       nav.href = "javascript:void(0)"; // Prevents page jump
       nav.innerText = "Join Waitlist 🔔";
       
     
       nav.onclick = () => {
           planText.innerText = "Request Registered! ✅ Thank you for your interest. We will notify you as soon as this city is live.";
           nav.style.display = "none";
           alert(`✅ You have been added to the list!\n\nThank you for your interest in ${city}. We have registered your request and will notify you as soon as our premium guide for this city is live.`);
       };
       
       planText.style.color = "#e0e0e0";
    }
}