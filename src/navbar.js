// function createElement(tag, attributes = {}, classList = []) {
//   const element = document.createElement(tag);
//   for (const key in attributes) {
//     element.setAttribute(key, attributes[key]);
//   }
//   classList.forEach((className) => element.classList.add(className));
//   return element;
// }

const menuItemsOne = document.querySelectorAll(".mega-menu-one");
const menuItemsTwo = document.querySelectorAll(".mega-menu-two");
const megaMenuOne = document.querySelector(".mega-menu");
const megaMenuTwo = document.querySelector(".mega-menu2");
const navbar = document.getElementById("mynav");
const columnTwo = document.querySelector(".column-two");
const columnThree = document.querySelector(".column-three");

function getImageUrl(url) {
  return window.location.origin + url;
}

menuItemsOne.forEach((navMenuItem) => {
  navMenuItem.addEventListener("click", (e) => {
    const allMenuItems = [...menuItemsOne].concat([...menuItemsTwo]);
    allMenuItems.forEach((navMenuItem) => {
      navMenuItem.classList.remove("nav-active");
    });
    e.target.parentElement.classList.add("nav-active");
    const id = e.target.parentElement.getAttribute("data-id");
    megaMenuTwo.style.display = "none";
    megaMenuOne.style.display = "block";
    document.body.style.overflow = "hidden";
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    renderMegaMenu(id);
  });
});

menuItemsTwo.forEach((navMenuItem) => {
  navMenuItem.addEventListener("click", (e) => {
    const allMenuItems = [...menuItemsOne].concat([...menuItemsTwo]);
    allMenuItems.forEach((navMenuItem) => {
      navMenuItem.classList.remove("nav-active");
    });
    e.target.parentElement.classList.add("nav-active");
    const id = e.target.parentElement.getAttribute("data-id");
    megaMenuOne.style.display = "none";
    megaMenuTwo.style.display = "block";
    document.body.style.overflow = "hidden";
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    renderMegaMenu2(id);
  });
});

function renderMegaMenu2(menuId) {
  const data = menu2[menuId].menuItems;
  const columnOne = document.querySelector(".mega-menu2 .column-one");
  const columnTwo = document.querySelector(".mega-menu2 .column-two");
  columnOne.innerHTML = "";
  data.forEach((item, index) => {
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    h5.classList.add("mega-menu-heading");
    h5.textContent = item.name;
    const ul = document.createElement("ul");
    ul.classList.add("pr-12");
    ul.setAttribute("data-id", index);
    item.list.forEach((listItem, i) => {
      const li = document.createElement("li");
      li.classList.add("mega-menu-link");
      li.setAttribute("data-subId", i);
      li.textContent = listItem.name;
      li.addEventListener("mouseover", (e) => {
        const subId = li.getAttribute("data-subId");
        const id = ul.getAttribute("data-id");
        createColumnThree2(menuId, id, subId);
      });
      li.addEventListener("click", (e) => {
        columnTwo.classList.add("activate");
      });
      ul.appendChild(li);
    });

    div.appendChild(h5);
    div.appendChild(ul);
    columnOne.appendChild(div);
  });
  createColumnThree2(menuId, 0, 0);
}

function renderMegaMenu(id) {
  createColumnOne(id);
}

function createColumnOne(activeMenuId) {
  const columnOneData = menu[activeMenuId].menus;

  const columnOne = document.querySelector(".mega-menu .column-one");
  columnOne.innerHTML = "";
  columnOneData.forEach((item, id) => {
    const div = document.createElement("div");
    div.classList.add(
      "border-b",
      "border-royal-gray-300",
      "py-6",
      "last:border-0",
      "column-one"
    );
    const h5 = document.createElement("h5");
    h5.classList.add("mega-menu-heading");
    h5.textContent = item.name;
    const ul = document.createElement("ul");
    ul.classList.add("pr-12");
    ul.setAttribute("data-id", id);
    item.items.forEach((item, subId) => {
      const li = document.createElement("li");
      li.classList.add("mega-menu-link");
      if (id === 0 && subId === 0) {
        li.classList.add("active-mega-link");
      }
      li.textContent = item.name;
      li.setAttribute("data-subid", subId);
      li.addEventListener("mouseover", (e) => {
        const subId = e.target.getAttribute("data-subid");
        const id = e.target.parentElement.getAttribute("data-id");
        const allItems = document.querySelectorAll(
          ".column-one .mega-menu-link"
        );
        allItems.forEach((item) => {
          item.classList.remove("active-mega-link");
        });
        e.target.classList.add("active-mega-link");
        createColumnTwo(activeMenuId, id, subId);
      });
      // Opening column two for Mobile
      li.addEventListener("click", (e) => {
        columnTwo.classList.add("activate");
      });

      ul.appendChild(li);
    });
    div.append(h5, ul);
    columnOne.appendChild(div);
  });
  createColumnTwo(activeMenuId);
}

function createColumnTwo(activeMenuId, id = 0, subId = 0) {
  const columnTwoData = menu[activeMenuId].menus[id].items[subId].subitems[0];
  const columnTwo = document.querySelector(".mega-menu .column-two");
  columnTwo.innerHTML = "";

  const div = document.createElement("div");
  const h5 = document.createElement("h5");
  h5.classList.add("mega-menu-heading");
  h5.textContent = columnTwoData.name;
  const ul = document.createElement("ul");
  ul.classList.add("pr-12");
  columnTwoData.items.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("mega-menu-link");
    li.textContent = item.name;
    if (index === 0) {
      li.classList.add("active-mega-link");
    }
    li.setAttribute("data-articleId", index);
    li.addEventListener("mouseover", (e) => {
      const articleId = e.target.getAttribute("data-articleId");
      const allItems = document.querySelectorAll(".column-two .mega-menu-link");
      allItems.forEach((item) => {
        item.classList.remove("active-mega-link");
      });
      e.target.classList.add("active-mega-link");
      createColumnThree(activeMenuId, id, subId, articleId);
    });
    // Opening column three for Mobile
    li.addEventListener("click", (e) => {
      columnThree.classList.add("activate");
    });

    ul.appendChild(li);
    div.append(h5, ul);
  });
  columnTwo.appendChild(div);
  createColumnThree(activeMenuId, id, subId, 0, true);
}

function createColumnThree2(activeMenuId, id = 0, subId = 0) {
  console.log({ activeMenuId, id, subId });
  const articleInfo = menu2[activeMenuId].menuItems[id].list[subId].article;
  const columnThree = document.querySelector(".mega-menu2 .column-two");
  const megaMenuLinks = document.querySelectorAll(".mega-menu-two");
  columnThree.innerHTML = "";
  const div = document.createElement("div");
  const header = document.createElement("header");
  header.classList.add("px-11", "py-7", "mb-9");
  const div1 = document.createElement("div");
  div1.classList.add("text-right");
  const img = document.createElement("img");
  img.classList.add("inline-block", "cursor-pointer", "close-mega-menu");
  img.src = getImageUrl("/public/images/icons/close.svg");
  img.setAttribute("alt", "Close Icon");
  img.addEventListener("click", () => {
    megaMenuTwo.style.display = "none";
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-colored");
    document.body.style.overflow = "auto";
    megaMenuLinks.forEach((item) => {
      item.classList.remove("nav-active");
    });
  });

  const h3 = document.createElement("h3");
  h3.classList.add("text-3xl", "font-medium");
  h3.textContent = articleInfo.heading;

  const p = document.createElement("p");
  p.classList.add("text-lg", "mt-3");
  p.textContent = articleInfo.description;

  const a = document.createElement("a");
  a.classList.add("flex", "items-center", "mt-4");
  a.setAttribute("href", articleInfo.link);

  const span = document.createElement("span");
  span.classList.add("text-xl", "font-medium", "mr-5");
  span.textContent = "Learn more";

  const img1 = document.createElement("img");

  img1.setAttribute("src", getImageUrl("/public/images/icons/arrow-right.svg"));
  img1.setAttribute("alt", "Arrow Right");

  const img2 = document.createElement("img");
  img2.classList.add("w-full");
  img2.setAttribute("src", getImageUrl(articleInfo.coverImage));
  img2.setAttribute("alt", "Smart City Placeholder");

  div1.appendChild(img);
  header.append(div1, h3, p, a);
  a.append(span, img1);
  div.append(header, img2);
  columnThree.appendChild(div);
}
function createColumnThree(
  activeMenuId,
  id = 0,
  subId = 0,
  articleId = 0,
  showDefault = false
) {
  const articleInfo = showDefault
    ? menu[activeMenuId].menus[id].items[subId].article
    : menu[activeMenuId].menus[id].items[subId].subitems[0].items[articleId]
        .content;
  const columnThree = document.querySelector(".mega-menu .column-three");
  const megaMenuLinks = document.querySelectorAll(".mega-menu-one");
  columnThree.innerHTML = "";
  const div = document.createElement("div");
  const header = document.createElement("header");
  header.classList.add("px-11", "py-7", "mb-9");
  const div1 = document.createElement("div");
  div1.classList.add("text-right");
  const img = document.createElement("img");
  img.classList.add("inline-block", "cursor-pointer", "close-mega-menu");
  img.setAttribute("src", getImageUrl("/public/images/icons/close.svg"));
  img.setAttribute("alt", "Close Icon");
  img.addEventListener("click", () => {
    megaMenuOne.style.display = "none";
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-colored");
    document.body.style.overflow = "auto";
    megaMenuLinks.forEach((item) => {
      item.classList.remove("nav-active");
    });
  });

  const h3 = document.createElement("h3");
  h3.classList.add("text-3xl", "font-medium");
  h3.textContent = articleInfo.heading;

  const p = document.createElement("p");
  p.classList.add("text-lg", "mt-3");
  p.textContent = articleInfo.description;

  const a = document.createElement("a");
  a.classList.add("flex", "items-center", "mt-4");
  a.setAttribute("href", articleInfo.link);

  const span = document.createElement("span");
  span.classList.add("text-xl", "font-medium", "mr-5");
  span.textContent = "Learn more";

  const img1 = document.createElement("img");
  img1.setAttribute("src", getImageUrl("/public/images/icons/arrow-right.svg"));
  img1.setAttribute("alt", "Arrow Right");

  const img2 = document.createElement("img");
  img2.classList.add("w-full");
  img2.setAttribute("src", getImageUrl(articleInfo.coverImage));
  img2.setAttribute("alt", "Smart City Placeholder");

  div1.appendChild(img);
  header.append(div1, h3, p, a);
  a.append(span, img1);
  div.append(header, img2);
  columnThree.appendChild(div);
}