const platformMenu = document.getElementById("platform-menu");

function changePlatformMenu(i) {
  renderPlatformMenu(i);
}

function renderPlatformMenu(index = 0) {
  // Data
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
      return `<li class="text-lg ${
        index == i ? " text-royal-purple-600" : ""
      }" onclick="changePlatformMenu(${i})">${item.name}</li>`;
    })
    .join("");

  var html = `
  <aside
  
  data-aos-duration="1000"
  class="lg:col-span-2 border border-royal-gray-300 rounded-3xl"
  >
  <ul class="platform-features ">
    ${listItems}
  </ul> 
  </aside>
  <article class="lg:col-span-3 items-center">
  
    <img src="${menu[index].image}"></img>
    <br>
    <p class="text-xl ">
      ${menu[index].description}
    </p>
  </article>
`;
  platformMenu.innerHTML = html;
}

renderPlatformMenu();
