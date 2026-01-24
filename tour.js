
let buttons = document.querySelectorAll(".my-3 button");
let mainImage = document.querySelector("#monument-img");
let explore = document.querySelector(".explore");
let description = document.querySelector("#monument-desc");




async function fetchDescription(monumentName){


   description.innerText = "Loading AI generated details";
   
  
   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${monumentName}`;
   let response = await fetch(url);
   let data = await response.json();
   await new Promise(resolve => setTimeout(resolve, 5000));
   description.innerText = data.extract;
};
  




buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let name = btn.innerText;
        
        if (btn.innerText === "Taj Mahal") {
            
            mainImage.src = "https://static.vecteezy.com/system/resources/thumbnails/017/791/706/original/4k-time-lapse-of-taj-mahal-an-ivory-white-marble-mausoleum-on-the-south-bank-of-the-yamuna-river-in-agra-uttar-pradesh-india-free-video.jpg";
        } 
        
        else if (btn.innerText === "Red Fort") {
            mainImage.src = "https://cdn.britannica.com/75/152475-050-DA89FF0A/Red-Fort-Old-Delhi-India.jpg";
        }
fetchDescription(name);
    });
});


const showExplore = () =>{
   const section = document.querySelector(".my-3");
   section.scrollIntoView({behaviour:'smooth'});
}
 
explore.addEventListener("click", showExplore);



