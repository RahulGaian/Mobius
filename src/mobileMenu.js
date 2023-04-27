const megaMenu = document.querySelector(".mega-menu-container");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("close-menu");
const actions = document.getElementById("menu-action");
const topNavbar = document.getElementById("top-navbar");
const activeMegaLink = document.querySelector(".mega-menu-link");
const megaMenuTwoColumnTwo = document.querySelector(".mega-menu2 .column-two");

openMenu.addEventListener("click", () => {
  megaMenu.style.display = "block";
  megaMenu.classList.add("mobile-menu");
  // document.body.style.overflow = "hidden";

  actions.style.display = "block";
  actions.classList.add("menu-action");
  topNavbar.style.height = "85px";
  topNavbar.style.backgroundColor = "white";
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
});
closeMenu.addEventListener("click", () => {
  megaMenu.style.display = "none";
  megaMenu.classList.remove("mobile-menu");
  actions.style.display = "none";
  actions.classList.remove("menu-action");
  topNavbar.style.height = "0";
  topNavbar.style.backgroundColor = "transparent";
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
  megaMenuOne.style.display = "none";
  megaMenuTwo.style.display = "none";
  columnTwo.classList.remove("activate");
  columnThree.classList.remove("activate");
  megaMenuTwoColumnTwo.classList.remove("activate");
});
// activeMegaLink.addEventListener("click", () => {
//   columnTwo.classList.add("activate");
// });






////////////////////Creating modal for book a demo button//////////////////
document.getElementsByTagName("section")[0].innerHTML += `
  <div id="modal"  class="modal" style="z-index:10000" >
  <div class="modal-content">
   <span class="close " style="z-index:100001" id="close1"></span>  
    <div class="calendly-inline-widget" data-url="https://calendly.com/srivatsamudumby/30min" style=""></div>
    
  </div>
  </div>`;
let script = document.createElement("script")
script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
script.setAttribute('async', true)
document.head.appendChild(script);
const modal = document.getElementById("modal");

a_tags = document.getElementsByTagName("a")
button_tags = document.getElementsByTagName("button")

let span = document.getElementById("close1");
span.onclick = function () {
  modal.style.display = "none";
  console.log("hello therer")
};
console.log(span)
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (let i of a_tags) {
  if (i.innerText == "Sign Up for a Free Trail") {
    i.href = "../../contact/ContactForDemo.html"
  }
  if (i.innerText == "Book a Demo") {
    i.href = "#"
    // i.onclick = function () {
    //   modal.style.display = "block";
    // };
    i.onclick = function () { }


  }
  if (i.innerText == "Get Started") {
    i.innerText = "Sign Up for a Free Trail"
    i.href = "/contact/ContactForDemo.html"

  }
  if (i.innerText == "You may also like") {
    i.parentElement.remove(i)
  }
  if (i.innerText == "Resources") {
    i.parentElement.remove(i)
  }
 

}



for (let j of button_tags) {
  if (j.innerText = "Get Started") {
    j.onclick = function () { location.href = '../../contact/ContactForDemo.html' }



    // console.log(j,j.onClick)
  }
}

function footer_changer() {
  let footer_tags = document.querySelectorAll("footer li a");
  for (let i of footer_tags) {
    switch (i.innerText) {

      //Company

      case "About": {
        i.innerText = "Overview"
        i.href = "../../overview/index.html";
        break;
      }

      case "Services": {
        i.parentElement.remove(i)
        break;
      }

      case "Leadership": {
        i.innerText = "People"
        i.href = "../../people/index.html";
        break;
      }

      case "Careers": {
        i.href = "../../careers/index.html";
        break;
      }

      case "Contact": {
        i.href = "../../contact/index.html";
        break;
      }

      case "Terms & Conditions": {
        i.href = "../platform/Holaverse.html";
        break;
      }






      /// Solutions

      case "Telecom & 5G": {
        i.innerText = "5G Market Place";
        i.href = "../solutions/private5g&Telco/5gMarketPlace.html";
        break;
      }

      case "Media & Broadcasting": {
        i.innerText = "NextGen TV";
        i.href = "../solutions/media&entertainment/NextGenTv.html";
        break;
      }

      case "Smartcities & Government": {
        i.innerText = "Smart City";
        i.href = "../solutions/government&publicsector/SmartCity.html";
        break;
      }

      case "IT Solutions & Automation": {
        i.innerText = "DevOps";
        i.href = "../solutions/ItAutomation/DevOps.html";
        break;
      }

      case "HR Tech": {
        i.innerText = "Smart Recruiting";
        i.href = "../solutions/hr&peopletech/SmartRecruiting.html";
        break;
      }

      // Products 

      case "OpsMax": {
        i.href = "../products/OpsMax.html";
        break;
      }
      case "AI Zoom Bot": {
        i.href = "../products/ZoomBot.html";
        break;
      }
      case "Antara": {
        i.href = "../ComingSoon/index.html";
        break;
      }
      case "Slack Bot": {
        i.href = "../ComingSoon/index.html";
        break;
      }
      case "Marketplace": {
        i.href = "../products/Partners/MarketPlace.html";
        break;
      }



      //Platform

      case "Pascal Intelligence(PI)": {
        i.href = "../../platform/Pascal Intelligence.html";
        break;
      }
      case "BoltzmanBot(BOB)": {
        i.href = "../../platform/BoltzmanBot.html";
        break;
      }
      case "Monet": {
        i.href = "../../platform/monet.html";
        break;
      }
      case "Vinci": {
        i.href = "../../platform/vinci.html";
        break;
      }
      case "Hola Verse": {
        i.href = "../../platform/Holaverse.html";
        break;
      }


    }
  }
}

footer_changer();


function google_analytics() {
  let x = document.createElement("script")
  x.src = "https://www.googletagmanager.com/gtag/js?id=G-VLXJ0TS5N0"
  x.async = true
  document.body.appendChild(x);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date()); gtag('config', 'G-VLXJ0TS5N0');
  console.log("done")
}

google_analytics();

const ids = ["product_section", "ben", "enter", "cases", "res,cap", "apps", "resources,problems", "expert"]


ids.map((i) => {
  let ele = document.getElementById(i)
  if (ele) {
    const div = document.createElement("div")
    div.setAttribute("id", i)
    ele.parentElement.insertBefore(div, ele)

    console.log("done");

  }
  else {
    return
  }
})





