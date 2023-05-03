const digitalPlatformMenu = document.getElementById("digital-platform-menu2");

function changedigitalPlatformMenu(i) {
  renderDigitalPlatformMenu(i);
}

function renderDigitalPlatformMenu(index = 0) {
  // Data
  const menu = [
    {
      name: "ESOPs Plan",
      image: "../public/images/careers/4.jpg",
      heading: "ESOPs Plans for all Employees   ",
      description:
        "An employee benefit plan in which employees receive an ownership stake in the company where they work through the receipt of stock",
    },
    {
      name: "Upskilling",
      heading: "Up-skilling, Re-skilling & Certifications",
      image: "../public/images/careers/6.jpg",
      description:
        "SME (Subject Matter Experts) with Certifications. 20+ employees are chosen across all domains and are given a chance to upgrade their skills by training on current/ upcoming technologies by industry experts.",
    },
    {
      name: "Lift all Program",
      heading: "Lift All Program ",
      image: "../public/images/careers/2.jpg",
      description:
        "This initiative brings together the top talent of the organization to conduct class room sessions and workshops and transfer knowledge",
    },
    {
      name: "Guest Speakers Session ",
      heading: "Guest Speakers Session",
      image: "../public/images/careers/3.jpg",
      description:
        "Mobius brings in the best in the industry to speak on their experiences and innovations",
    },
    {
      name: "Build your own Startup",
      heading: "Build your own Startup",
      image: "../public/images/careers/1.jpg",
      description:
        "Mobius Startup Studio initiative provides funding & technology support for brilliant startup ideas",
    },
    {
        name: "Career Progression Tool",
        heading: "Career Progression Tool",
        image: "../public/images/careers/5.jpg",
        description:
          "Track & improve your linear career progress with a Career Progression Tool to lineup your careers to further heights",
      },
  ];

  const listItems = menu
    .map((item, i) => {
      return `<li class="mt-7 lg:border-l-4 border-b-4 lg:border-b-0 border-transparent text-xl  lg:pl-6  ${
        index == i
          ? "lg:border-l-4 border-b-4 lg:border-b-0 !border-royal-purple-600 text-royal-purple-600"
          : ""
      }" onclick="changedigitalPlatformMenu(${i})">${item.name}</li>`;
    })
    .join("");

  var html = `
  <aside class="lg:col-span-3">
    <ul class="w-full" style="  cursor: pointer;    ">
      ${listItems}
    </ul>
  </aside>
  <article
    class="lg:col-span-8 grid lg:grid-cols-3 justify-between  padding-value   lg:border-l border-t px-4 lg:border-t-0  border-royal-gray-300"
  >
    <div class="lg:col-span-2 mx-auto px-4 ">
      <h5 class="heading-section">${menu[index].heading}</h5>
      <p class="body-text mt-4">
      ${menu[index].description}
      </p>
    </div>
    <div class="col-span-1 mt-6 lg:mt-0">
      <img
        class="w-full"
        style="border-radius:10%"
        src="${menu[index].image}"
        alt="The platform map"
      />
    </div>
  </article>
`;
  digitalPlatformMenu.innerHTML = html;
}

renderDigitalPlatformMenu();

