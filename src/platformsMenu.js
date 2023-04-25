const platformMenu = document.getElementById("platform-menu");
var index2 = 0;
function changePlatformMenu(i) {
  renderPlatformMenu(i);
}

function renderPlatformMenu(index = 0) {
  // Data
  index2 = (index2+1) % 5;
  const menu = [
    {
      name: "SaaSifying Digital Transformation",
      image: "../public/images/home/77.png",
      description:
        "Mobius DTaaS is committed to Sassifying Digital Transformation through its suite of advanced SaaS tools that enable businesses to achieve digital transformation at lightning speed. By leveraging the power of low-code philosophies and XaaS phygital transformation, Mobius DTaaS empowers businesses to streamline operations, enhance customer experiences, and create new value in weeks rather than years. With its platform designed around the concept of agility, innovation, and cost-effectiveness, Mobius DTaaS enables businesses to scale their usage up or down as needed, respond quickly to market conditions, and avoid unexpected costs associated with traditional software deployment models.",
    },
    {
      name: "Phygital Transformation",
      image: "../public/images/home/78.png",
      description:
        "Mobius DTaaS is dedicated to achieving true convergence between physical and digital worlds through its platform philosophy of Phygital Transformation. With its suite of SaaS tools - Pascal Intelligence, BoltzmannBot, Monet, Vinci, and HolaVerse - Mobius DTaaS empowers businesses to streamline operations, enhance customer experiences, and drive innovation in the phygital realm. By bringing together the best of human and machine capabilities, Mobius DTaaS enables businesses to transform their operations, create new revenue streams, and unlock new possibilities in the phygital age.",
    },
    {
      name: "Accountable Transformation",
      image: "../public/images/home/79.png",
      description:
        "The Mobius DTaaS philosophy is to provide businesses with a comprehensive suite of SaaS tools that enable them to achieve accountable, responsible, and monetizable digital transformation. By offering tools that measure the effectiveness of DT initiatives and enhance digital capabilities, businesses can transform their operations, improve customer experiences, and achieve measurable business outcomes such as increased revenue and reduced operational costs.",
    },
    {
      name: "SaaS Factory",
      image: "../public/images/home/80.png",
      description:
        "Mobius DTaaS is a SaaS factory that empowers businesses to rapidly achieve digital transformation at scale by providing access to cutting-edge SaaS tools. With its constantly improving services, Mobius DTaaS ensures that businesses always receive the best possible solutions for their digital transformation needs, providing greater scalability, flexibility, cost-effectiveness, security, and reliability compared to traditional software deployment models",
    },
    {
      name: "Inter-org Digital Transformation",
      image: "../public/images/home/81.png",
      description:
        "Mobius DTaaS enables digital transformation as a service between organizations through API-to-API integrations, creating a unified digital ecosystem that streamlines operations and reduces the need for manual interventions. With its secure platform and API-first approach, Mobius DTaaS ensures that businesses can achieve greater agility, scalability, and efficiency, accelerating their digital transformation journeys and achieving better business outcome",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      return `
      <div class="accordion-item">
      <div class="d-flex justfy-between mr-8">
       <li  class="accordion-button ${i != 0 ? ' collapsed ': ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="true" aria-controls="collapseOne" class="text-lg ${index == i ? " text-royal-purple-600" : "" } "> ${item.name}
        </li>
        <img class="inline-block" src="../public/images/solutions/External.svg"  alt="Preview Icon"/>
         </div>
      <div id="collapseOne${i}" class="accordion-collapse collapse ${i == 0 ? ' show ': ''}" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
         <div class="accordion-body default-font">
           ${menu[i]['description']}
        </div>
    </div> 
  </div>`;
    })
    .join("");

  // <div class="accordion">
  //   <div class="accordion-item">
  //     <li class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  //       Accordion Item #1
  //     </li>
  //     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  //       <div class="accordion-body">
  //         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
  //       </div>
  //     </div>
  //   </div>
  // </div>



  var html = `
  <aside
  
  data-aos-duration="1000"
  class="aside-width lg:col-span-2 border-royal-gray-300 rounded-3xl"
  >
  <ul class="platform-features " id="accordionExample">
     ${listItems}
  </ul> 
  </aside>
`;
  platformMenu.innerHTML = html;
}


// setInterval(
//   () => {
//     renderPlatformMenu();
//   },2000)


renderPlatformMenu();

