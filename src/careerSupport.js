const supportMenu = document.getElementById("career-support");

function changeSupportMenu(i) {
  renderSupportMenu(i);
}

function renderSupportMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "Perks",
      image: "",
      subDescription:
        "Carefully designed perks & incentivization for rewarding excellence",
      heading: "Healt Cover",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra in magna sed volutpat gravida. Nulla dolor in dui felis sed vitae. Amet integer posuere tristique sed proin faucibus tempor consequat. Non sodales interdum orci odio.",
    },
    {
      name: "Perks 01",
      image: "",
      subDescription:
        "Carefully designed perks & incentivization for rewarding excellence",
      heading: "Healt Cover",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra in magna sed volutpat gravida. Nulla dolor in dui felis sed vitae. Amet integer posuere tristique sed proin faucibus tempor consequat. Non sodales interdum orci odio.",
    },
    {
      name: "Perks 02",
      image: "",
      subDescription:
        "Carefully designed perks & incentivization for rewarding excellence",
      heading: "Healt Cover",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra in magna sed volutpat gravida. Nulla dolor in dui felis sed vitae. Amet integer posuere tristique sed proin faucibus tempor consequat. Non sodales interdum orci odio.",
    },
    {
      name: "Perks 03",
      image: "",
      subDescription:
        "Carefully designed perks & incentivization for rewarding excellence",
      heading: "Health Cover",
      description:
        "Lorem ipsum dolor sit amet consectetur. Viverra in magna sed volutpat gravida. Nulla dolor in dui felis sed vitae. Amet integer posuere tristique sed proin faucibus tempor consequat. Non sodales interdum orci odio.",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      return `<div class="w-3 h-3 inline-block rounded-full bg-royal-gray-300 mr-2  ${
        index == i ? "bg-royal-purple-600" : ""
      }" onclick="changeSupportMenu(${i})"></div>`;
    })
    .join("");

  var html = `
  <div>
            <div class="lg:mr-24 px-4 lg:px-0 max-w-xl">
              <h3 class="heading-section">${menu[index].name}</h3>
              <p class="body-text !text-lg mt-4">
              ${menu[index].subDescription}
              </p>
            </div>
            <div class="lg:mr-24 mt-12 px-4 lg:px-0 max-w-xl">
              <h3 class="heading-section">${menu[index].heading}</h3>
              <p class="body-text !text-lg mt-4">
              ${menu[index].description}
              </p>
            </div>
            <div class="mt-12 px-4">
              ${listItems}
            </div>
          </div>
          <div class="pl-4 lg:pl-0 mt-12 lg:mt-0 text-right">
            <img
              class="inline-block"
              src="../public/images/health-cover.svg"
              alt="Emergency Ambulance Service"
            />
          </div>
`;
  supportMenu.innerHTML = html;
}

renderSupportMenu();
