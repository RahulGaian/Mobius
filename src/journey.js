const journeyMenu = document.getElementById("journey");

function changeJourneyMenu(i) {
  renderJourneyMenu(i);
}

function renderJourneyMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "2023",
      image: "",
      heading: "Mobius DTasS Platform Launch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae cras egestas posuere integer at viverra imperdiet tellus eleifend",
    },
    {
      name: "2020",
      image: "",
      heading: "Mobius DTasS Platform Launch 01",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae cras egestas posuere integer at viverra imperdiet tellus eleifend",
    },
    {
      name: "2010",
      image: "",
      heading: "Mobius DTasS Platform Launch 02",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae cras egestas posuere integer at viverra imperdiet tellus eleifend",
    },
    {
      name: "2006",
      image: "",
      heading: "Mobius DTasS Platform Launch 03",
      description:
        "Lorem ipsum dolor sit amet consectetur. Vitae cras egestas posuere integer at viverra imperdiet tellus eleifend",
    },
  ];

  const listItems = menu
    .map((item, i) => {
      return `<figure class=""><div class="w-4 h-4 bg-white rounded-full  ${
        index == i ? "bg-royal-purple-500" : ""
      }" onclick="changeJourneyMenu(${i})"></div></figure>`;
    })
    .join("");

  var html = `
        <aside data-aos="fade-up" class="w-2 h-96">
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
                      2023
                    </h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2020</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2010</h4>
                  </figure>
                  <figure class="">
                    <h4 class="text-base text-royal-gray-400">2006</h4>
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
