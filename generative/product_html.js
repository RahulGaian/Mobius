const generator = (arr) => {
  //console.log(arr[0]);
  (Main_heading = arr[0]),
    (Main_heading_content = arr[1]),
    (Main_image = arr[2]),
    (cap1_img = arr[3]),
    //console.log(cap1_img);
  (cap1_heading = arr[4]),
    (cap1_content = arr[5]),
    (cap2_img = arr[6]),
    (cap2_heading = arr[7]),
    (cap2_content = arr[8]),
    (cap3_img = arr[9]),
    (cap3_heading = arr[10]),
    (cap3_content = arr[11]),
    (cap4_img = arr[12]),
    (cap4_heading = arr[13]),
    (cap4_content = arr[14]),
    (ben1_img = arr[15]),
    (ben1_heading = arr[16]),
    (ben1_content = arr[17]),
    (ben2_img = arr[18]),
    (ben2_heading = arr[19]),
    (ben2_content = arr[20]),
    (ben3_img = arr[21]),
    (ben3_heading = arr[22]),
    (ben3_content = arr[23]),
    (third_img = arr[24]),
    (third_heading = arr[25]),
    (third_content = arr[26]),
    (products_heading = arr[27]),
    (last_heading = arr[28]);
  Base_Image_path = "../public/images/products/";

  let data;

  data = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <!-- Swiper -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <!-- Animate on scroll -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- CSS -->
    <link rel="stylesheet" href="../public/output.css" />
    <link rel="stylesheet" href="../public/changes.css" />

    <link rel="stylesheet" href="../src/menu.css" />
    <title>${last_heading} - Mobius DTasS</title>
  </head>
  <body>
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50" id="top-navbar">
      <div class="absolute z-20 top-0 w-full navbar" id="mynav">
        <nav id="nav-bar" class="  mx-auto lg:flex justify-between items-center py-6 lg:pt-10 lg:pb-8">
          <div class="lg:flex items-center">
            <div class="flex justify-between items-center">
              <a href="/">
                <img
                  
                  class="w-20"
                  src="../public/images/brand-logo.svg"
                  alt="Mobius Brand Logo"
                />
              </a>
              <img
                class="lg:hidden"
                src="../public/images/icons/menu.svg"
                alt="Menu"
                id="openmenu"
              />
              <img
                class="hidden"
                src="../public/images/icons/close-outline.svg"
                alt="Menu"
                id="close-menu"
              />
            </div>
            <ul class="hidden lg:flex items-center mega-menu-container">
              <li
                class="ml-14 relative mega-menu-item mega-menu-one"
                data-id="0"
              >
                <span class="nav-link top-nav-link">Solutions</span>
                <img
                  class="absolute left-2/4 -translate-x-2/4 hidden top-8 cheveron-down"
                  src="../public/images/icons/chevron-down.svg"
                  alt="Arrow Down Icon"
                />
                <!-- <div>
                  <div>
                    <h4>EXPERTISE by industry</h4>
                    <ul>
                      <li>Government & Public Sector</li>
                      <li>Private 5G & Telco</li>
                      <li>Media & Entertainment</li>
                      <li>Health & Wellness</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Expertise By Business Function</h4>
                    <ul>
                      <li>HR & People Tech</li>
                      <li>IT Automation</li>
                    </ul>
                  </div>
                </div> -->
              </li>
              <li
                class="ml-11 relative mega-menu-item mega-menu-one"
                data-id="1"
              >
                <span class="nav-link top-nav-link">Products</span>
                <img
                  class="absolute left-2/4 -translate-x-2/4 hidden top-8 cheveron-down"
                  src="../public/images/icons/chevron-down.svg"
                  alt="Arrow Down Icon"
                />
              </li>
              <li
                class="ml-11 relative mega-menu-item mega-menu-two"
                data-id="0"
              >
                <span class="nav-link top-nav-link menu2">Platform</span>
                <img
                  class="absolute left-2/4 -translate-x-2/4 hidden top-8 cheveron-down"
                  src="../public/images/icons/chevron-down.svg"
                  alt="Arrow Down Icon"
                />
              </li>
              <li
                class="ml-11 relative mega-menu-item mega-menu-two"
                data-id="1"
              >
                <span class="nav-link top-nav-link menu2">Company</span>
                <img
                  class="absolute left-2/4 -translate-x-2/4 hidden top-8 cheveron-down"
                  src="../public/images/icons/chevron-down.svg"
                  alt="Arrow Down Icon"
                />
              </li>
              <li class="ml-11">
                <a class="nav-link" href="/contact.html">Contact</a>
              </li>
            </ul>
          </div>

          <ul class="hidden lg:flex items-center" id="menu-action">
            <!-- <li>
              <a
                class="text-royal-purple-600 text-lg font-medium mr-7"
                href="tel:+118001231234"
                >+1 1800 123 1234</a
              >
            </li> -->
            <li>
              <a class="btn btn-filled mr-4" href="/singup">Get Started</a>
            </li>
            <li>
              <a class="btn" href="signin">
                <span>Login</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- Mega Menu One -->
      <div
      id="navbar"
        class="absolute z-20 top-32 w-full bg-black bg-opacity-30 h-screen hidden mega-menu"
      >
        <nav class="bg-gradient-pink-opacity-9 border-t border-royal-gray-300">
          <div id="mega-menu-one-container"  class="px-custom lg:pl-20 lg:grid lg:grid-cols-7">
            <div
              class="col-span-2 border-r border-royal-gray-300 py-2 pr-6 column-one"
            ></div>

            <div class="col-span-2 border-r border-royal-gray-300 py-2 px-6">
              <div
                class="border-b border-royal-gray-300 py-6 last:border-0 column-two"
              ></div>
            </div>
            <article
              class="col-span-3 flex flex-col justify-between column-three"
            ></article>
          </div>
        </nav>
      </div>
      <!-- Mega Menu Twp -->
      <div
        id="navbar"
        class="absolute z-20 top-32 w-full bg-black bg-opacity-30 hidden h-screen mega-menu mega-menu2"
      >
        <nav class="bg-gradient-pink-opacity-9 border-t border-royal-gray-300">
          <div id="mega-menu-one-container" class="px-custom lg:pl-20 lg:grid lg:grid-cols-5">            <div
              class="col-span-3 lg:grid grid-cols-2 border-r border-royal-gray-300 py-2 pr-6 column-one"
            ></div>
            <article
              class="col-span-2 flex flex-col justify-between column-two"
            ></article>
          </div>
        </nav>
      </div>
    </header>
    <!-- Main Content -->
    <main>
      <!-- Banner -->
      <section
        class="banner-bg-pink pt-36 pb-16 lg:pt-60 lg:pb-48 md:pt-44 md:pb-32"
        
      >
        <article
          class=" mx-auto px-4 md:grid md:grid-cols-2 items-center md:gap-20 lg:gap-32"
        >
          <div>
            <header class="relative">

              <h1 class="heading-banner heading-banner-md mt-4 relative z-10">
                <strong>
                  ${Main_heading}
                </strong>
              </h1>
              <!-- <img
                class="absolute bottom-0 w-20 md:w-auto md:left-2/4"
                src="../public/images/graphics/highlihter.svg"
                alt="Curve Line"
              /> -->
            </header>

            <p class="body-text mt-5">
                ${Main_heading_content}
            </p>
            <footer
              class="mt-16 text-blue-600 flex flex-wrap items-start md:items-center flex-col md:flex-row gap-8"
            >
              <a
                class="btn btn-filled text-xl font-bold md:mr-8"
                href="/signup"
              >
                Sign Up for a Free Trail
              </a>
              <a class="btn" href="../contact/ContactForDemo.html">
                <span>Book a Demo</span>
              </a>
            </footer>
          </div>
          <div class="mt-12 md:mt-0">
            <img class="w-full" src='${
              Base_Image_path + Main_image
            }' alt="Map" />
          </div>
        </article>
      </section>
      <!-- Smart City Features -->
      <header class="sticky-header">
        <nav
          class="flex justify-between items-center bg-royal-purple-300 lg:pb-0"
        >
          <ul class="flex bg-royal-purple-300 px-4 lg:px-24">
            <li class="mr-16">
              <a
                class="nav-link text-royal-gray-900 py-6 inline-block active-feature relative"
                href="#product_section"
                >Features</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#ben"
                >Benefits</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#cases"
                >Usecases</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#app-swiper"
                >You may also like</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#res"
                >Resources</a
              >
            </li>
          </ul>
          <a
            class="sticky-header-btn nav-link px-4 lg:px-12 py-6 text-royal-gray-700 lg:text-white"
            href="#"
            style="background-color: #2D22AA;color:white;"
            >Contact Us</a
          >
        </nav>
      </header>

      <!-- Features-->
      <section class="mt-11" id="product_section" >
       <article
          data-aos="fade-up"
          class="px-6-custom py-12 md:py-16 lg:py-24 grid md:grid-cols-2 items-center md:gap-20 lg:gap-36 justify-items-center "
        >
                <img
                style="max-height:320px"
                class="inline-block"
                src='${Base_Image_path + cap1_img}'
                alt="Web Development"
            />
          <div class="max-W-533 mt-8 md:mt-0">
            <h2 class="heading-article">${cap1_heading}</h2>
            <p class="body-text mt-3">
                ${cap1_content}
            </p>
          </div>
        </article>
       <article
          data-aos="fade-up"
          class="px-6-custom py-12 md:py-16 lg:py-24 grid md:grid-cols-2 items-center md:gap-20 lg:gap-36 justify-items-center "
        >
          <div class="order-1 md:order-none mt-8 md:mt-0 max-W-533">
            <h2 class="heading-article">
                ${cap2_heading}
            </h2>
            <p class="body-text mt-3">
            ${cap2_content}

            </p>
          </div>
          <img
          style="max-height:320px"

          class="inline-block"
          src='${Base_Image_path + cap2_img}'
          alt="Web Development"
      />
          </article>
       <article
          data-aos="fade-up"
          class="px-6-custom py-12 md:py-16 lg:py-24 grid md:grid-cols-2 items-center md:gap-20 lg:gap-36 justify-items-center "
        >
        <img
        class="inline-block"
        src='${Base_Image_path + cap3_img}'
        style="max-height:320px"

        alt="Web Development"
          />
          <div class="max-W-533 mt-8 md:mt-0">
            <h2 class="heading-article">
            ${cap3_heading}

            </h2>
            <p class="body-text mt-3">
            ${cap3_content}

            </p>
          </div>
        </article>
       <article
          data-aos="fade-up"
          class="px-6-custom py-12 md:py-16 lg:py-24 grid md:grid-cols-2 items-center md:gap-20 lg:gap-36 justify-items-center "
        >
          <div class="order-1 md:order-none mt-8 md:mt-0 max-W-533">
            <h2 class="heading-article">      
            ${cap4_heading}
            </h2>
            <p class="body-text mt-3">
            ${cap4_content}

            </p>
          </div>
          <img
          class="inline-block"
          src='${Base_Image_path + cap4_img}'
          style="max-height:320px"

          alt="Web Development"
            />
          </article>
      </section>

      <!-- Benefits -->
      <section
        data-aos="fade-up"
        class="mt-16 bg-gradient-purple py-20 text-white" id="ben"
      >
        <div class="container mx-auto px-4">
          <header class="mb-10 md:mb-24 relative">
            <h3 class="heading-section text-white text-center relative z-10">
              Benefits
            </h3>
            <img
              class="absolute bottom-1 left-2/4 w-16"
              src="../public/images/graphics/highlihter.svg"
              alt="Curve Line"
            />
          </header>
          <div id="benifits" class="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-20">
            <article class="max-W-400">
              <img
                src='${Base_Image_path + ben1_img}'
                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
                ${ben1_heading}
              </h4>
              <p class="opacity-70 text-base mt-2">
                ${ben1_content}
              </p>
            </article>
            <article>
              <img
                src='${Base_Image_path + ben2_img}'
                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
                    ${ben2_heading}
              </h4>
              <p class="opacity-70 text-base mt-2">
                    ${ben2_content}
              </p>
            </article>
            <article>
              <img
                src='${Base_Image_path + ben3_img}'
                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
                ${ben3_heading}
              </h4>
              <p class="opacity-70 text-base mt-2">
                ${ben3_content}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" class="mt-16 bg-gradient-pink py-10" id="cases">
       <article id="caseStudy">
          <div >
            <h3 class="heading-section"> ${third_heading} </h3>
            <p class="body-text !text-lg mt-4">
                ${third_content}
            </p>
            <a class="btn btn-outlined mt-12" href="#">Read Case Study</a>
          </div>
          <div class="pl-4 lg:pl-0 mt-12 lg:mt-0 text-right">
            <img
              class="inline-block"
              src='${Base_Image_path + third_img}'
              alt="Emergency Ambulance Service"
            />
          </div>
        </article>
      </section>
      <!-- Related Products -->
      <section data-aos="fade-up" class="py-16">
      <header class="flex justify-between items-center px-4 mb-16">
        <img
          id="nav-left"
          src="../public/images/icons/arrow-left-circled.svg"
          alt="Arrow Left"
        />
        <div class="relative">
          <h3 class="heading-section text-center relative z-10">
            Related Products
          </h3>
          <img
            class="absolute bottom-1 right-2/4 translate-x-2/4 md:translate-x-0 md:-right-2 w-16"
            src="../public/images/graphics/highlihter.svg"
            alt="Curve Line"
          />
        </div>

        <img
          id="nav-right"
          src="../public/images/icons/arrow-right-circled.svg"
          alt="Arrow Right"
        />
      </header>
      <div class="swiper px-4 md:px-0" id="app-swiper">
        <div class="swiper-wrapper">
          <!-- slider 1 -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">311</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    311 citizen engagement app is a mobile application that allows citizens to report non-emergency issues to their local government and receive updates on the status of their requests.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5058.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">Live Maps</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    Live maps citizen engagement app provides real-time information on community events, public services, and local news, enabling citizens to stay informed and engaged in their neighborhoods.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5052.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">First Responder</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    First Responder enables citizens to report emergencies and receive immediate assistance from local first responders, providing a crucial link between citizens and emergency services.

                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">311</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    311 citizen engagement app is a mobile application that allows citizens to report non-emergency issues to their local government and receive updates on the status of their requests.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5058.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">Live Maps</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    Live maps citizen engagement app provides real-time information on community events, public services, and local news, enabling citizens to stay informed and engaged in their neighborhoods.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5052.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">First Responder</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    First Responder enables citizens to report emergencies and receive immediate assistance from local first responders, providing a crucial link between citizens and emergency services.

                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">311</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    311 citizen engagement app is a mobile application that allows citizens to report non-emergency issues to their local government and receive updates on the status of their requests.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5058.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">Live Maps</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    Live maps citizen engagement app provides real-time information on community events, public services, and local news, enabling citizens to stay informed and engaged in their neighborhoods.
                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
          <a class="swiper-slide" href="#">
            <article
              class="border border-royal-gray-300 min-w-min md:min-w-96 rounded-3xl bg-white"
            >
              <div
                class=" bg-opacity-20 h-40 rounded-t-3xl"
                style="background-image: url('../public/images/solutions/5052.png') ;background-size: cover;width: 100%;"
                >
                
            </div>
              <div class=" bg-white px-8 py-5">
                <header>
                  <h4 class="heading-card">First Responder</h4>
                </header>
                <div class="mt-2 ">
                  <p class="text-base mt-2 text-royal-gray-500">
                    First Responder enables citizens to report emergencies and receive immediate assistance from local first responders, providing a crucial link between citizens and emergency services.

                  </p>
                </div>
              </div>
              <footer class=" border-t border-royal-gray-300 rounded-full "style=";">
                <table class="table-auto border-collapse w-full   h-14  border-gray-500 mt-0" style="margin: 0px;">
                <tbody>
                  <tr class="">
                    <td class="border-r px-4 py-4 text-center" style="border-right-width:2px">
                      <img
                      class="inline-block"
                      src="../public/images/icons/preview.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Preview</strong
                      >
                    </td>
                    <td class="px-4 py-2 text-center">
                      <img
                      class="inline-block"
                      src="../public/images/solutions/External.svg"
                      alt="Preview Icon"
                      />
                      <strong class="text-base font-medium text-royal-gray-700"
                      >Details</strong
                      >
                    </td>
                  </tr>
                </tbody>
                </table>

     
              </footer>
            </article>
          </a>
          <!-- slide  -->
        </div>
      </div>
    </section>

      <!-- Resources -->
      <section data-aos="fade-up" class="my-20" id="res">
        <div class="container mx-auto px-4">
          <header class="flex justify-between items-center">
            <h3 class="heading-section">Resources</h3>
            <a class="btn btn-sm" href="#">See all</a>
          </header>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            <article class="border border-royal-gray-300 rounded-3xl">
              <div>
                <img
                  class="rounded-t-3xl"
                  src="../public/images/resources.jpeg"
                  alt="Resources"
                />
              </div>
              <div class="py-7 px-5">
                <h5 class="font-bold text-sm text-royal-purple-700 mb-1">
                  BLOG
                </h5>
                <h4 class="heading-card mt-2">Boston 311</h4>
                <p class="text-base text-royal-gray-400 font-medium mt-3">
                  A read about how Mobius DTasS enabled Smart City deployments
                  in Boston, California
                  <a class="text-royal-purple-600" href="">(read more)</a>
                </p>
              </div>
            </article>
            <article class="border border-royal-gray-300 rounded-3xl">
              <div>
                <img
                  class="rounded-t-3xl"
                  src="../public/images/resources.jpeg"
                  alt="Resources"
                />
              </div>
              <div class="py-7 px-5">
                <h5 class="font-bold text-sm text-royal-purple-700 mb-1">
                  BLOG
                </h5>
                <h4 class="heading-card mt-2">Boston 311</h4>
                <p class="text-base text-royal-gray-400 font-medium mt-3">
                  A read about how Mobius DTasS enabled Smart City deployments
                  in Boston, California
                  <a class="text-royal-purple-600" href="">(read more)</a>
                </p>
              </div>
            </article>
            <article class="border border-royal-gray-300 rounded-3xl">
              <div>
                <img
                  class="rounded-t-3xl"
                  src="../public/images/resources.jpeg"
                  alt="Resources"
                />
              </div>
              <div class="py-7 px-5">
                <h5 class="font-bold text-sm text-royal-purple-700 mb-1">
                  BLOG
                </h5>
                <h4 class="heading-card mt-2">Boston 311</h4>
                <p class="text-base text-royal-gray-400 font-medium mt-3">
                  A read about how Mobius DTasS enabled Smart City deployments
                  in Boston, California
                  <a class="text-royal-purple-600" href="">(read more)</a>
                </p>
              </div>
            </article>
            <article class="border border-royal-gray-300 rounded-3xl">
              <div>
                <img
                  class="rounded-t-3xl"
                  src="../public/images/resources.jpeg"
                  alt="Resources"
                />
              </div>
              <div class="py-7 px-5">
                <h5 class="font-bold text-sm text-royal-purple-700 mb-1">
                  BLOG
                </h5>
                <h4 class="heading-card mt-2">Boston 311</h4>
                <p class="text-base text-royal-gray-400 font-medium mt-3">
                  A read about how Mobius DTasS enabled Smart City deployments
                  in Boston, California
                  <a class="text-royal-purple-600" href="">(read more)</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <!-- Call to Action Section -->
      <section data-aos="fade-up" class="my-16 px-6-custom md:px-0">
        <article
          class=" mx-auto px-8 text-center cta-wrapper rounded-3xl"
        >
          <h3 class="text-4xl font-bold text-royal-purple-500">
          Explore ${last_heading} for your Organisation
          </h3>
          <p class="text-xl leading-8 mt-4 mb-12 max-w-lg mx-auto">
          Contact our expert team to explore from tons of usecases on how ${last_heading} can  uniquely drive value to your organisation. 
          </p>
          <button class="btn btn-filled">Get Started</button>
        </article>
      </section>

      <div class="px-4 lg:px-11 mt-28">
        <hr class="hr-graphic" />
      </div>
    </main>
    <!-- Footer -->
    <footer data-aos="fade-up" class="mt-16 md:mt-20 pb-14">
      <div class="container mx-auto px-4">
               <div id="footer"  class="grid justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10">

          <nav>
            <h4 class="heading-card">Company</h4>
            <ul class="mt-5 md:mt-9">
              <li class="mb-4">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Leadership</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Careers</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Terms & Conditions</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 class="heading-card">Solutions</h4>
            <ul class="mt-5 md:mt-9">
              <li class="mb-4">
                <a class="nav-link" href="#">Telecom & 5G</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Media & Broadcasting</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Smartcities & Government</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">IT Solutions & Automation</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">HR Tech</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 class="heading-card">Product</h4>
            <ul class="mt-5 md:mt-9">
              <li class="mb-4">
                <a class="nav-link" href="#">OpsMax</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">AI Zoom Bot</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Antara</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Slack Bot</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Marketplace</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 class="heading-card">Platform</h4>
            <ul class="mt-5 md:mt-9">
              <li class="mb-4">
                <a class="nav-link" href="#">Pascal Intelligence(PI)</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">BoltzmanBot(BOB)</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Monet</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Vinci</a>
              </li>
              <li class="mb-4">
                <a class="nav-link" href="#">Hola Cracy</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="text-center mt-12 md:mt-20">
          <nav>
            <ul class="flex justify-center items-center">
              <li class="mx-4">
                <a href="#">
                  <img
                    src="../public/images/icons/linkedin.svg"
                    alt="Linkedin Icon"
                  />
                </a>
              </li>
              <li class="mx-4">
                <a href="#">
                  <img
                    src="../public/images/icons/instagram.svg"
                    alt="Instagram Icon"
                  />
                </a>
              </li>
              <li class="mx-4">
                <a href="#">
                  <img
                    src="../public/images/icons/twitter.svg"
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li class="mx-4">
                <a href="#">
                  <img
                    src="../public/images/icons/facebook.svg"
                    alt="Facebook Icon"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <div class="mt-11">
            <small class="text-sm"
              >All Rights Reserved. 2023 Copyright
              <a class="underline" href="#">Gaian Solutions</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
    <!-- Navigation Menu -->
    <script src="../config/navigationMenu.js"></script>
    <script src="../config/navigationMenu2.js"></script>
    <script src="../src/navbar.js"></script>
    <script src="../src/mobileMenu.js"></script>
    <!-- Slider -->
    <script src="../src/slider.js"></script>
    <!-- Platfrom menu -->
    <script src="../src/digitalPlatformMenu.js"></script>
    <script src="../src/platformsMenu.js"></script>
    <!-- Animate on scroll -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
      });
    </script>
  </body>
</html>

  
  
  
  `;
  return data;
};

// export default generator;

module.exports = {
  gen: generator,
};
