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
  closeLogin();
});
closeMenu.addEventListener("click", () => {
  document.body.style.overflow = "scroll"
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
  //console.log("hello therer")
};
//console.log(span)
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (let i of a_tags) {

  if (i.innerText == "Get Started") {
    i.innerText = "Sign Up for a Free Trail"
    i.href = "../../contact/ContactForDemo.html"
  }
  if (i.innerText == "Book a Demo") {
    i.href = "#"
    // i.onclick = function () {
    //   modal.style.display = "block";
    // };
    i.onclick = function () { }


  }


  if (i.innerText == "You may also like") {
    i.innerText = "Related Products"
  }
  if (i.innerText == "Resources") {
    i.parentElement.remove(i)
  }

}




for (let j of button_tags) {
  if (j.innerText = "Get Started") {
    j.onclick = function () { location.href = '/contact/ContactForDemo.html' }



    // //console.log(j,j.onClick)
  }
}

function footer_changer() {
  let footer_tags = document.querySelectorAll("footer li a");
  for (let i of footer_tags) {
    switch (i.innerText) {

      //Company

      case "About": {
        i.innerText = "Overview"
        i.href = "/overview/index.html";
        break;
      }

      case "Services": {
        i.parentElement.remove(i)
        break;
      }

      case "Leadership": {
        i.innerText = "People"
        i.href = "/people/index.html";
        break;
      }

      case "Careers": {
        i.href = "/careers/index.html";
        break;
      }

      case "Contact": {
        i.href = "/contact/index.html";
        break;
      }

      case "Terms & Conditions": {
        i.href = "/Terms&Conditions/index.html";

        ele = document.createElement("li")
        a = document.createElement("a")
        
        ele.setAttribute("class","mb-4")
        a.setAttribute("class","nav-link")
        a.href = "/PrivacePolicy/index.html"
        a.innerText = "Privacy Policy"
        ele.appendChild(a)
        i.parentElement.parentElement.appendChild(ele)
        console.log(i.parentElement,"he",ele)
        break;
      }






      /// Solutions

      case "Telecom & 5G": {
        i.innerText = "5G Market Place";
        i.href = "/solutions/private5g&Telco/5gMarketPlace.html";
        break;
      }

      case "Media & Broadcasting": {
        i.innerText = "NextGen TV";
        i.href = "/solutions/media&entertainment/NextGenTv.html";
        break;
      }

      case "Smartcities & Government": {
        i.innerText = "Smart City";
        i.href = "/solutions/government&publicsector/SmartCity.html";
        break;
      }

      case "IT Solutions & Automation": {
        i.innerText = "DevOps";
        i.href = "/solutions/ItAutomation/DevOps.html";
        break;
      }

      case "HR Tech": {
        i.innerText = "Smart Recruiting";
        i.href = "/solutions/hr&peopletech/SmartRecruiting.html";
        break;
      }

      // Products 

      case "OpsMax": {
        i.href = "/products/OpsMax.html";
        break;
      }
      case "AI Zoom Bot": {
        i.href = "/products/ZoomBot.html";
        break;
      }
      case "Antara": {
        i.href = "/ComingSoon/index.html";
        break;
      }
      case "Slack Bot": {
        i.href = "/ComingSoon/index.html";
        break;
      }
      case "Marketplace": {
        i.href = "/products/Partners/MarketPlace.html";
        break;
      }



      //Platform

      case "Pascal Intelligence(PI)": {
        i.href = "/platform/Pascal Intelligence.html";
        break;
      }
      case "BoltzmanBot(BOB)": {
        i.href = "/platform/BoltzmanBot.html";
        break;
      }
      case "Monet": {
        i.href = "/platform/monet.html";
        break;
      }
      case "Vinci": {
        i.href = "/platform/vinci.html";
        break;
      }
      case "Hola Cracy": {

        // i.innerText = "Hola Cracy"
        i.href = "/platform/Holacracy.html";

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
  //console.log("done")
}

google_analytics();

const ids = ["product_section", "ben", "enter", "cases", "res,cap", "apps", "resources,problems", "expert"]


ids.map((i) => {
  let ele = document.getElementById(i)
  if (ele) {
    const div = document.createElement("div")
    div.setAttribute("id", i)
    ele.parentElement.insertBefore(div, ele)

    //console.log("done");

  }
  else {
    return
  }

})






var flag = false
function loginEvent(event) {
  // event.stopPropagation();

  // small-screen-view-header


  var widerScreenWidth2 = window.matchMedia("(max-width: 1023px)");
  flag = true
  let ele = document.getElementById('login_popup');
  let ele2 = document.getElementById('login_select_toggle');

  if (widerScreenWidth2.matches) {
    ele.classList.add('small-size');
    //  if( document.getElementById('small-screen-view-header')) {
    document.getElementById('small-screen-view-header').classList.remove('display-icon');
    document.getElementById('menu-action2').classList.add('background-fade');
    document.getElementById('top-navbar').classList.add('background-fade-header');
    //  }
    //  document.getElementById('small-screen-view-header').
  }
  else if (ele.classList.contains('small-size')) {
    ele.classList.remove('small-size');
    document.getElementById('small-screen-view-header').classList.add('display-icon');
    document.getElementById('menu-action2').classList.remove('background-fade');
    document.getElementById('top-navbar').classList.remove('background-fade-header');


  }



  if (ele.classList.contains('hide_popup')) {
    ele.classList.remove('hide_popup')
    ele2.classList.add('rotate-icon')
  }
  else {
    ele.classList.add('hide_popup');
    ele2.classList.remove('rotate-icon');
  }
}



window.addEventListener('click', function (event) {
  let widerScreenWidth2 = window.matchMedia("(max-width: 1023px)");

  if (widerScreenWidth2.matches) {
    return;
  }
  if (!flag) {

    let ele = document.getElementById('login_popup');
    let ele2 = document.getElementById('login_select_toggle');
    if (!ele.classList.contains('hide_popup')) {
      ele.classList.add('hide_popup');
      ele2.classList.remove('rotate-icon');
    }

  }
  else {
    flag = false;

  }

})





function closeLogin() {
  let ele = document.getElementById('login_popup');
  let ele2 = document.getElementById('login_select_toggle');
  if (!ele.classList.add('hide_popup')) {
    ele.classList.add('hide_popup');
    ele2.classList.remove('rotate-icon');
    document.getElementById('menu-action2').classList.remove('background-fade');
    document.getElementById('top-navbar').classList.remove('background-fade-header');
  }

}



// document.getElementById('menu-action2').addEventListener('clcik',() => {
//     document.getElementById('menu-action2').classList.add('.remove-pointer-event')
// })


// function add_fade() {
//   document.getElementById('menu-action2').classList.add('.remove-pointer-event')

// }









function addPopup() {

  let l = window.location.pathname.length;

  var head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element
  var link = document.createElement('link');

  // set the attributes for link element
  link.rel = 'stylesheet';

  link.type = 'text/css';

  link.href = `${l <= 1 ? '' : '../'}../public/changes.css`;

  // Append link element to HTML head
  head.appendChild(link);

  var fontAsw = document.createElement('script');
  fontAsw.src = 'https://kit.fontawesome.com/b4f86e4cfd.js';
  fontAsw.crossorigin = 'anonymous';
  head.appendChild(fontAsw);

  //console.log('length', document.getElementsByClassName('login_class').length);


  //  setTimeout(() => {

  //   if( document.getElementsByClassName('login_class') &&  document.getElementsByClassName('login_class').length) {
  //     let ele4 =  document.getElementsByClassName('login_class')[0];
  //     ele4.appendChild(`<i id="login_select_toggle" class="fa fa-chevron-down" aria-hidden="true"></i>`);

  //   }

  //  }, 10000);


  setTimeout(() => {


    let fileD = '../';

    let popupEle = `

  <div style="position: relative;">
  <aside id="login_popup" class="aside-link hide_popup small-size " data-aos-duration="10000"
  class="lg:col-span-2 border-royal-gray-300 rounded-3xl">
  <ul class="platform-features ">
    <div id="small-screen-view-header" class="login-links display-icon">
      <li  class="login_text" type="button" class="!text-lg"> Login
      </li>
      <img onClick="closeLogin()" style="cursor: pointer;"  class="" src="${l <= 1 ? '' : '../'}../public/images/icons/close-outline.svg" alt="Menu" id="close-menu" />
    </div>
    <div class="login-links">
      <a style="display: flex;" class="d-flex" href="https://pi.gaiansolutions.com/" target="_blank">
        <li style="width: 100%;" class="" type="button" class="text-lg"> Pascal Intelligence
        </li>
        <img class="change-color" src="${l <= 1 ? '' : '../'}../public/images/Landing_logos/link-icon.svg" alt="select dropdown" />
      </a>
    </div>
    <div class="login-links">
      <a style="display: flex;" class="d-flex" href="http://bob.gaiansolutions.com/" target="_blank">
        <li style="width: 100%;" class="" type="button" class="text-lg"> BoltzmanBot
        </li>
        <img class="change-color" src="${l <= 1 ? '' : '../'}../public/images/Landing_logos/link-icon.svg" alt="select dropdown" />
      </a>
    </div>
    <div class="login-links">
      <a style="display: flex;" class="d-flex" href="http://monet.gaiansolutions.com/" target="_blank">
        <li style="width: 100%;" class="" type="button" class="text-lg"> Monet
        </li>
        <img src="${l <= 1 ? '' : '../'}../public/images/Landing_logos/link-icon.svg" alt="select dropdown" />
      </a>
    </div>
    <div class="login-links">
      <a style="display: flex;" class="d-flex" href="https://marketplace.gaiansolutions.com/" target="_blank">
        <li style="width: 100%;" class="" type="button" class="text-lg"> Holacracy
        </li>
        <img src="${l <= 1 ? '' : '../'}../public/images/Landing_logos/link-icon.svg" alt="select dropdown" />
      </a>
    </div>
  </ul>
</aside>
</div>
  
  `

    const login = `
  <li>
  <a class="btn-login login_class" onClick="loginEvent(event)">
    <span>Login</span>
    <i id="login_select_toggle" class="fa fa-chevron-down" aria-hidden="true"></i>
  </a>
</li>`;



    const megaMenu = document.getElementsByClassName('mega-menu-container')[0];
    const ulEle = document.getElementById('menu-action');
    const lis = document.querySelectorAll("#menu-action > li");


    if (document.querySelectorAll("#menu-action div") && document.querySelectorAll("#menu-action div").length > 0) {
      document.querySelectorAll("#menu-action div")[0].setAttribute('display', 'none');
    }
    ulEle.classList.add('small-view-padding');
    megaMenu.setAttribute('id', 'menu-action2');


    let lisArray = [...lis];
    // if(lisArray.length>2) {
    //   lisArray.unshift();
    // }
    let ele2 = lis[0].innerHTML;
    if (lis) {
      lisArray.unshift(popupEle);
      lisArray.pop();
      lisArray.push(login);
    }
    lisArray[1] = `<li>${ele2}`;
    // lis.innerHTML = (lisArray.map(ele =>  ele)).join("");
    ulEle.innerHTML = (lisArray.map(ele => ele)).join("");




  }, 1000);

}






addPopup();


// var apps =document.getElementById('apps');

// var enter = document.getElementById("enter2");

// window.addEventListener('resize',function (event) {
//   var widerScreenWidth = window.matchMedia("(max-width: 1023px)");

//   if(widerScreenWidth.matches) {
//     closeLogin();


//   }


// })




function init() {  


  

  var capabilities = document.querySelector("#cap2");
  var problems_article = document.querySelector("#problem > article");
  var enterprise_article = document.querySelector("#enter2 > article");
  if (capabilities) {
    capabilities.classList.remove('py-20');
    var capabilities_div = document.querySelector("#cap2 > div");
    if (capabilities_div) {
      capabilities_div.classList.remove('container');
      capabilities_div.classList.remove('px-4');
      capabilities_div.classList.contains('px-custom') ? '' : capabilities_div.classList.add('px-custom');
    }

  }
  if (enterprise_article) {

    enterprise_article.classList.remove('container');
    enterprise_article.classList.remove('items-center');


    // //console.log(enterprise_article.lastChild,enterprise_article.children);
    enterprise_article.children.length > 1 ? enterprise_article.children[1].classList.remove('lg:px-0') : '';
    enterprise_article.children.length > 1 ? enterprise_article.children[1].classList.remove('lg:py-0') : '';

  }

  if (problems_article) {
    problems_article.classList.remove('container');
    // problems_article.classList.contains('px-custom') ? '' : problems_article.classList.add('px-custom');
    problems_article.classList.add('justify-between');
    problems_article.classList.add('lg\:pl-24');
    problems_article.children[1].classList.remove('lg:mt-0');
  }

  window_resizing();


}

init();


window.addEventListener('resize', function () {
  window_resizing();

});


function window_resizing() {
  var widerScreenWidth4 = window.matchMedia("(max-width: 500px)");
  const product_section_articles = document.querySelectorAll("#product_section > article");
  if (widerScreenWidth4.matches) {
    product_section_articles ? product_section_articles.forEach(ele => {
      ele.classList.remove('px-6-custom');
      ele.classList.contains('px-4') ? '' : ele.classList.add('px-4');
    }) : '';
  }
  else {
    product_section_articles ? product_section_articles.forEach(ele => {
      ele.classList.contains('px-6-custom') ? '' : ele.classList.add('px-6-custom');
      ele.classList.remove('px-4');
    }) : '';
  }
}


// function addheight(id) {
//   const ele = document.getElementById(id)
//   ele ? ele.style.height = "100px":'';
//   ele ? ele.setAttribute('width','100px'):'';

// }

