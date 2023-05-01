const digitalPlatformMenu = document.getElementById("digital-platform-menu");

function changedigitalPlatformMenu(i) {
  renderDigitalPlatformMenu(i);
}

function renderDigitalPlatformMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "Pascal Intelligence (PI)",
      image: "../public/images/Landing_logos/pi.svg",
      heading: "AI Powered Predictive Analysis",
      description:
        "PI-Pascal Intelligence is a powerful multi-tenant, cloud-native SaaS tool that empowers enterprises to make data-driven decisions and turn data into actionable insights. It provides low-code tools for data visualization, contextualization, and targeting, along with all three layers of big data processing - ingest, process, and serve.",
    },
    {
      name: "BoltzmannBot (BoB)",
      heading: "BoltzmannBot (BoB)",
      image: "../public/images/Landing_logos/boltzman_bot.svg",
      description:
        "BoB is a cutting-edge API automation and business process orchestration platform that streamlines and automates complex workflows across industries. BoB leverages the power of advanced algorithms and machine learning to deliver efficient, scalable, and reliable automation solutions.",
    },
    {
      name: "Monet",
      heading: "Monet",
      image: "../public/images/Landing_logos/monet.svg",
      description:
        "Monet is a low-code application development multi-tenant SaaS tool that enables businesses to create a multitude of applications in various B2X2X models, making it an ideal solution for any enterprise looking to digitize and create innovative digital experiences.",
    },
    {
      name: "Vinci",
      heading: "Vinci",
      image: "../public/images/Landing_logos/Vinci.png",
      description:
        "Vinci is a cloud-native, multi-tenant SaaS tool that provides omnichannel engagement as a service. The platform empowers users to create real-time engagements that connect them with customers, employees, partners, and stakeholders in real-time, driving unbeatable ROI.",
    },
    {
      name: "HolaCracy",
      heading: "Hola Verse",
      image: "../public/images/Landing_logos/marketplace.svg",
      description:
        "Holacracy is a cutting-edge, multi-tenant SaaS platform that offers a collaborative marketplace as a service. The platform provides businesses with the raw materials for digital transformation, including technology providers, content providers, infrastructure providers, and monetization partners. Holacracy is the ultimate destination for businesses looking to take their phygital transformation to the next level and drive success through collaborative partnerships.",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      return `<li class="mt-7 lg:border-l-4 border-b-4 lg:border-b-0 border-transparent text-xl  lg:pl-6  ${
        index == i
          ? "lg:border-l-4 border-b-4 lg:border-b-0 !border-royal-purple-600 text-royal-purple-600"
          : ""
      }" onclick="changedigitalPlatformMenu(${i})" onMouseOver="this.style.cursor='pointer'">${item.name}</li>`;
    })
    .join("");

  var html = `

  <aside data-aos="fade-up"  class=" constructs lg:col-span-3">
    <ul class="w-full">
      ${listItems}
    </ul>
  </aside>
  <article
    
  data-aos="fade-up"
    class="large-screens lg:col-span-8 grid lg:grid-cols-3 justify-between py-8 lg:py-12 lg:pl-12 lg:border-l border-t lg:border-t-0 border-royal-gray-300"
  >
  <div class="col-span-1 mt-6 lg:mt-0">
  <img
    class="w-full"
    src="${menu[index].image}"
    alt="The platform map"
  />
</div>
    <div class="lg:col-span-2 addMargin">
      <h3 class="heading-section">${menu[index].heading}</h3>
      <p class="body-text mt-4">
      ${menu[index].description}
      </p>
    </div>
  </article>
`;
  digitalPlatformMenu.innerHTML = html;
}



renderDigitalPlatformMenu();
