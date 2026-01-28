let buttons = document.querySelectorAll(".my-3 button");
let mainImage = document.querySelector("#monument-img");
let explore = document.querySelector(".explore");
let description = document.querySelector("#monument-desc");
let title = document.querySelector("#monument-title");
let model = document.querySelector(".box");


async function fetchDescription(monumentName) {
  description.innerText = "✨ AI is thinking...";
  description.style.fontWeight = "bold";

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${monumentName}`;
  let response = await fetch(url);
  let data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  description.innerText = "";
  description.style.fontWeight = "bold";

  let text = data.extract;
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    let nextWord = words[i] + " ";

    description.textContent += nextWord;

    description.scrollTop = description.scrollHeight;

    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let name = btn.innerText;
    title.innerText = name;
    model.classList.remove("hide");
    if (btn.innerText === "Taj Mahal") {
      mainImage.src = "./images/tajmahal2.jpg";
    } else if (btn.innerText === "Red Fort") {
      mainImage.src = "./images/redfort2.jpg";
    } else if (btn.innerText === "Ellora Caves") {
      mainImage.src = "./images/ellora.jpg";
    } else if (btn.innerText === "Qutub Minar") {
      mainImage.src = "./images/minar.jpg";
    } else if (btn.innerText === "Humayun's Tomb") {
      mainImage.src = "./images/tomb.jpg";
    }else if (btn.innerText === "India Gate") {
      mainImage.src = "./images/indiagate.jpg";
    }else if (btn.innerText === "Gateway of India") {
      mainImage.src = "./images/gateway.jpg";
    }else if (btn.innerText === "Ram Mandir") {
      mainImage.src = "./images/mandir.jpg";
    }
    fetchDescription(name);
  });
});

const showExplore = () => {
  const section = document.querySelector(".my-3");
  section.scrollIntoView({ behaviour: "smooth" });
};

explore.addEventListener("click", showExplore);





