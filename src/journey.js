const journeyMenu = document.getElementById("journey");

function changeJourneyMenu(i) {
  renderJourneyMenu(i);
}

function renderJourneyMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "April 23 2023",
      image: "12.jpg",
      heading: "Won Product of the year award at NAB Show",
      description:
        "",
    },
    {
      name: "Jan 22 2023 ",
      image: "",
      heading: "Presented Mobius Products at CES 2023",
      description:
        "",
    },
    {
      name: "April 23 2019",
      image: "",
      heading: "Launched Gaitav3.0 in US Market",
      description:
        "",
    },
    {
      name: "April 23 2016",
      image: "",
      heading: "Entered US Broadcast Market",
      description:
        "",
    },
    {
      name: "April 23 2016",
      image: "",
      heading: "Selection in Indian Railway Project",
      description:
        "",
    },
    {
      name: "April 23 2015",
      image: "",
      heading: "7 Patents Filed",
      description:
        "",
    },
    {
      name: "April 23 2012",
      image: "",
      heading: "Founded Seelamsetty Ramaroa Foundation & Trained 5000 people",
      description:
        "",
    },
    {
      name: "April 23 2011",
      image: "",
      heading: "100 Employees in the Team",
      description:
        "",
    },
    {
      name: "April 23 2010",
      image: "",
      heading: "Foundation and Office Establishment in LA",
      description:
        "",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      //console.log(i)
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
                  class="h-full  max-w-min flex flex-col justify-between ml-4"
                >
                <figure class="">
                <h4 class="text-base  text-royal-purple-600 font-bold">April 23 2023 </h4>
              </figure>
              <figure class="">
                <h4 class="text-base text-royal-gray-400">April 23  2023 </h4>
              </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400 ">
                    April 23 2019
                    </h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">April 23 2016</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">April 23 2016</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">April 23 2015</h4>
                  </figure>
                  <figure class="">
                  <h4 class="text-base text-royal-gray-400">April 23 2012</h4>
                </figure>
                <figure class="">
                  <h4 class="text-base text-royal-gray-400">April 23 2011</h4>
                </figure>
                <figure class="">
                  <h4 class="text-base text-royal-gray-400">April 23 2010</h4>
                </figure>
                </div>
              </div>
            </aside>

            <article  data-aos="fade-up" class="flex items-center">
              <div style="flex:2">
                <h2 class="heading-section">${menu[index].heading}</h2>
                <p class="body-text mt-2">
                ${menu[index].description}
                </p>
              </div>
              ${menu[index].image != "" ? `<div style="flex:1" ><img   src="../public/images/Overview/${menu[index].image }"></img></div>`:`<div class="bg-royal-gray-100 h-96 rounded-3xl"></div>` }
              
            </article>
`;
  journeyMenu.innerHTML = html;
}

renderJourneyMenu();
