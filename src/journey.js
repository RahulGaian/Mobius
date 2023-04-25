const journeyMenu = document.getElementById("journey");

function changeJourneyMenu(i) {
  renderJourneyMenu(i);
}

function renderJourneyMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "2019",
      image: "",
      heading: "Launched Gaitav3.0 in US Market",
      description:
        "",
    },
    {
      name: "2016",
      image: "",
      heading: "Entered US Broadcast Market",
      description:
        "",
    },
    {
      name: "2016",
      image: "",
      heading: "Selection in Indian Railway Project",
      description:
        "",
    },
    {
      name: "2015",
      image: "",
      heading: "7 Patents Filed",
      description:
        "",
    },
    {
      name: "2012",
      image: "",
      heading: "Founded Seelamsetty Ramaroa Foundation & Trained 5000 people",
      description:
        "",
    },
    {
      name: "2011",
      image: "",
      heading: "100 Employees in the Team",
      description:
        "",
    },
    {
      name: "2010",
      image: "",
      heading: "Foundation and Office Establishment in LA",
      description:
        "",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      console.log(i)
      return `<figure class=""><div class="w-4 h-4  rounded-full  ${
        index == i ? "bg-royal-purple-500" : "bg-white"
      }" onclick="changeJourneyMenu(${i})"></div></figure>`;
    })
    .join("");

  var html = `
        <aside  class="w-2 h-96">
              <div
                class="h-full !w-2 bg-royal-purple-700 bg-opacity-60 rounded-3xl relative flex"
              >
                <div
                  class="h-full !w-2 max-w-min flex flex-col justify-between items-center"
                >
                  ${listItems}
                </div>
                <div
                  class="h-full !w-2 max-w-min flex flex-col justify-between ml-8"
                >
                  <figure class="">
                    <h4 class="text-base text-royal-purple-600 font-bold">
                      2019
                    </h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2016</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2016</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2015</h4>
                  </figure>
                  <figure class="">
                  <h4 class="text-base text-royal-gray-400">2012</h4>
                </figure>
                <figure class="">
                  <h4 class="text-base text-royal-gray-400">2011</h4>
                </figure>
                <figure class="">
                  <h4 class="text-base text-royal-gray-400">2010</h4>
                </figure>
                </div>
              </div>
            </aside>

            <article data-aos="fade-up" class="grid md:grid-cols-2 gap-16 items-center">
              <div class="">
                <h2 class="heading-section">${menu[index].heading}</h2>
                <p class="body-text mt-2">
                ${menu[index].description}
                </p>
              </div>
              <div class="bg-royal-gray-100 h-96 rounded-3xl"></div>
            </article>
`;
  journeyMenu.innerHTML = html;
}

renderJourneyMenu();
