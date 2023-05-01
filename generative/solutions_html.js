
const generator = (arr) => {
  console.log(arr[0])
  Main_heading =arr[0],
  Main_heading_content=arr[1],
  Main_image=arr[2],
  Second_heading=arr[3],
  Second_heading_content=arr[4],
  second_image=arr[5],
  
  cap1_img=arr[6],
  cap1_heading=arr[7],
  cap1_content=arr[8],
  
  cap2_img=arr[9],
  cap2_heading=arr[10],
  cap2_content=arr[11],
  
  cap3_img=arr[12],
  cap3_heading=arr[13],
  cap3_content=arr[14],
  
  cap4_img=arr[15],
  cap4_heading=arr[16],
  cap4_content=arr[17],
  
  cap5_img=arr[18],
  cap5_heading=arr[19],
  cap5_content=arr[20],
  
  cap6_img=arr[21],
  cap6_heading=arr[22],
  cap6_content=arr[23],
  
  
  third_img=arr[24],
  third_heading=arr[25],
  third_content = arr[26],
  
  products_heading=arr[27]
Base_Image_path = "../public/images/solutions/"

let data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-widarr[1], initial-scale=1.0" />
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
    <title>Mobius Marketing Website</title>
  </head>
  <body>
    <!-- Navigation Bar -->
    <header>
      <div class="absolute z-20 top-0 w-full navbar">
        <nav
          class="container px-4 mx-auto lg:flex justify-between items-center pt-10 pb-8"
        >
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
              />
            </div>
            <ul class="hidden lg:flex items-center">
              <li class="ml-14 relative">
                <span class="nav-link top-nav-link">Solutions</span>
                <img
                  class="absolute left-2/4 -translate-x-2/4 hidden top-8 cheveron-down"
                  src="../public/images/icons/chevron-down.svg"
                  alt="Arrow Down Icon"
                />
              </li>
              <li class="ml-11">
                <span class="nav-link top-nav-link">Products</span>
              </li>
              <li class="ml-11">
                <span class="nav-link top-nav-link">Platform</span>
              </li>
              <li class="ml-11">
                <span class="nav-link top-nav-link">Company</span>
              </li>
              <li class="ml-11">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <ul class="hidden lg:flex items-center">
            <li>
              <a
                class="text-royal-purple-600 text-lg font-medium mr-7"
                href="tel:+118001231234"
                >+1 1800 123 1234</a
              >
            </li>
            <li>
              <a class="btn btn-filled mr-4" href="/singup">Book a Demo</a>
            </li>
            <li>
              <a class="btn" href="signin">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="absolute z-20 top-32 w-full bg-black bg-opacity-30 h-screen hidden mega-menu"
      >
        <nav class="bg-gradient-pink-opacity-9 border-t border-royal-gray-300">
          <div class="pl-20 grid grid-cols-7">
            <div class="col-span-2 border-r border-royal-gray-300 py-6 pr-6">
              <div class="border-b border-royal-gray-300 pb-6">
                <h5 class="mega-menu-heading">EXPERTISE BY INDUSTRY</h5>
                <ul class="pr-12">
                  <li class="mega-menu-link active-mega-menu-link">
                    Government & Public Sector
                  </li>
                  <li class="mega-menu-link">Private 5G & Telco</li>
                  <li class="mega-menu-link">Media & Entertainment</li>
                  <li class="mega-menu-link">Health & Wellness</li>
                </ul>
              </div>
              <div class="py-6">
                <h5 class="mega-menu-heading">
                  Expertise By Business Function
                </h5>
                <ul class="pr-12">
                  <li class="mega-menu-link">HR & People Tech</li>
                  <li class="mega-menu-link">IT Automation</li>
                </ul>
              </div>
            </div>

            <div class="col-span-2 border-r border-royal-gray-300 py-6 px-6">
              <h5 class="mega-menu-heading">Offerings</h5>
              <ul class="pr-12">
                <li class="mega-menu-link active-mega-menu-link">
                  Smart City as a Service
                </li>
                <li class="mega-menu-link">Citizen Engagement</li>
              </ul>
            </div>
            <article class="col-span-3 flex flex-col justify-between">
              <header class="px-11 py-7 mb-9">
                <div class="text-right">
                  <img
                    class="inline-block cursor-pointer close-mega-menu"
                    src="../public/images/icons/close.svg"
                    alt="Close Icon"
                  />
                </div>
                <h3 class="text-3xl font-medium">Smart Cities</h3>
                <p class="text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur. Amet diam egestas nibh
                  commodo duis gravida ornare nisi hendrerit Lorem ipsum dolor
                  sit amet consectetur. Amet diam egestas nibh commodo duis
                  gravida ornare nisi hendrerit.
                </p>
                <a class="flex items-center mt-4" href="">
                  <span class="text-xl font-medium mr-5">Learn more</span>
                  <img
                    src="../public/images/icons/arrow-right.svg"
                    alt="Arrow Right"
                  />
                </a>
              </header>
              <img
                src="../public/images/smart-city-placeholder.png"
                alt="Smart City Placeholder"
              />
            </article>
          </div>
        </nav>
      </div>
    </header>
    <!-- Main Content -->
    <main>
      <!-- Banner -->
      <section id="banner-section" class="banner-bg-pink pt-36 pb-16 md:pt-44 md:pb-16">

        <article
          class=" ml-auto md:grid md:grid-cols-2 items-center md:gap-20 lg:gap-32 justify-end"
        >
          <div class="px-4 lg:pl-4 lg:px-0">
            <header class="relative">
              <div class="body-text">
                <a class="text-royal-pink-700 opacity-70" href="/">Home</a>
                <span class="text-royal-pink-700 opacity-70">/</span>
                <a class="text-royal-pink-700 opacity-70" href="/solutions"
                  >Solutions</a
                >
                <span class="text-royal-pink-700 opacity-70">/</span>
                <a class="text-royal-pink-700 opacity-70" href="#"
                  > TeleCommunications</a
                >
                <span class="text-royal-pink-700 opacity-70">/</span>
                <a class="text-royal-pink-700 opacity-70" href="#"
                  > 5g Network Orcheatrations</a
                >
              </div>
              <h1 class="heading-banner heading-banner-md mt-12 relative z-10">
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
              class="mt-16 mb-16 text-blue-600 flex flex-wrap items-start md:items-center flex-col md:flex-row"
            >
              <a
                class="btn btn-filled text-xl font-bold md:mr-20"
                href="/signup"
              >
                Book a Demo
              </a>
            </footer>
          </div>
          <div class="mt-12 md:mt-0 pl-4 sm:pl-0">
            <img
              class="w-full"
              src='${Base_Image_path + Main_image}'
              alt="Smart City"
            />
          </div>
        </article>
        <!-- Custome Stripe -->
        <!-- <footer class="container mx-auto mt-32 px-4">
          <h4 class="text-xl font-medium text-center mb-7">Happy Customers</h4>
          <div class="swiper" id="strip-slider">
            <div class="swiper-wrapper">
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
              <div class="bg-white h-14 swiper-slide"></div>
            </div>
          </div>
        </footer> -->
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
                href="#"
                >Problem Statement</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#"
                >Capabilities</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#"
                >Case Study</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#"
                >Products</a
              >
            </li>
            <li class="mr-16">
              <a class="nav-link text-royal-gray-900 py-6 inline-block" href="#"
                >Resources</a
              >
            </li>
          </ul>
          <a
            class="nav-link px-4 lg:px-12 py-6 text-royal-gray-700 lg:text-white sticky-header-btn"
            href="#"
            style="background-color: #2D22AA;color:white;"
            >Speak to an Expert</a
          >
        </nav>
      </header>
      <section
        data-aos="fade-up"
        class="bg-gradient-purple-graphics pb-10 text-white smart-city feature pt-10"
      >
        <article class="container ml-auto lg:flex items-center mt-11">
          <div class="lg:mr-24 px-4 lg:pl-4 lg:px-0 max-w-3xl pt-10">
            <h3 class="heading-section !text-white">
              ${Second_heading} 
                </h3>
            <p class="body-text !text-lg !text-white mt-4">
            ${Second_heading_content}
            </p>
            <!-- <a class="btn btn-filled-dark mt-12" href="#">Contact Sales</a> -->
          </div>
          <div class="pl-4 lg:pl-0 mt-12 lg:mt-0 text-right">
            <img
              class="inline-block"
              src=${Base_Image_path + second_image}
              alt="Smart City"
            />
          </div>
        </article>
      </section>

      <!-- Capablities -->
      <section data-aos="fade-up" class="mt-16 py-20">
        <div class="container mx-auto px-4">
          <header class="mb-10 md:mb-16 relative inline-block">
            <h3 class="heading-section relative z-10">Capabilities</h3>
            <img
              class="absolute bottom-1 left-2/4 w-16"
              src="../public/images/graphics/highlihter.svg"
              alt="Curve Line"
            />
          </header>
          <div class="grid md:grid-cols-3 gap-10 md:gap-12  lg:gap-20">
            <article>
              <img
                src='${(Base_Image_path + cap1_img).toString()}'
                style='height:70px'
                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
                ${cap1_heading}             
                </h4>
              <p class="opacity-70 text-base mt-2">
                ${cap1_content}
              </p>
            </article>
            <article>
              <img
              src='${Base_Image_path + cap2_img}'
              style='height:70px'

              alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
              ${cap2_heading}   
              </h4>
              <p class="opacity-70 text-base mt-2">
              ${cap2_content}   
              </p>
            </article>
            <article>
              <img
              src='${Base_Image_path + cap3_img}'
              style='height:70px'

                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
              ${cap3_heading}   
              </h4>
              <p class="opacity-70 text-base mt-2">
              ${cap3_content}   
              </p>
            </article>
            <article>
              <img
              src='${Base_Image_path + cap4_img}'
              style='height:70px'

                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
              ${cap4_heading}   
              </h4>
              <p class="opacity-70 text-base mt-2">
              ${cap4_content}   
              </p>
            </article>
            <article>
              <img
              src='${Base_Image_path + cap5_img}'
              style='height:70px'

                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
              ${cap5_heading}   
              </h4>
              <p class="opacity-70 text-base mt-2">
              ${cap5_content}   
              </p>
            </article>
            <article>
              <img
              src='${Base_Image_path + cap6_img}'
              style='height:70px'

                alt="Information Icon"
              />
              <h4 class="mt-4 md:mt-8 heading-card">
              ${cap6_heading}   
              </h4>
              <p class="opacity-70 text-base mt-2">
              ${cap6_content}   
              </p>
            </article>
          </div>
        </div>
      </section>
      <!-- Enterprise -->
      <section data-aos="fade-up" class="bg-gradient-pink my-12 lg:my-20">
        <article class="container grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <img              
             src='${Base_Image_path + third_img}'
            alt="" />
          </div>
          <div class=" px-4 lg:px-0 py-12 lg:py-0">
            <h2 class="heading-section">
              ${third_heading}      
              </h2>
            <p class="body-text mt-3">
              ${third_content}
            </p>
            <a class="btn btn-outlined mt-12" href="#">
              <span>Download Case Study</span>
            </a>
          </div>
        </article>
      </section>
      <!-- Apps Powered -->
      <section data-aos="fade-up" class="py-16">
        <header class="flex justify-between items-center px-4 mb-16 pt-10 ">
          <img
            id="nav-left"
            src="../public/images/icons/arrow-left-circled.svg"
            alt="Arrow Left"
          />
          <div class="relative">
            <h3 class="heading-section text-center relative z-10">
              ${products_heading}
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
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
              style="background-image: url('../public/images/solutions/1.png') ;background-size: cover;width: 100%;"
              >
              
          </div>
            <div class=" bg-white px-8 py-5">
              <header>
                <h4 class="heading-card">Boston 311</h4>
              </header>
              <div class="mt-2 ">
                <p class="text-base mt-2 text-royal-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Eget arcu
                  fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Aliquid nesciunt enim ullam vitae error optio cumque ab, 
                  ut ea tenetur eaque sunt dolorem voluptate numquam unde dolore ducimus velit est!
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
      <!-- Related Products -->
      <!-- <section data-aos="fade-up" class="py-16 bg-royal-gray-100">
        <div class="container mx-auto px-4">
          <header>
            <h3 class="text-2xl font-bold mb-3">You may also like..</h3>
            <p class="text-lg">
              Related products to Mobius Smart City Solutions
            </p>
          </header>
          <div class="mt-12 grid lg:grid-cols-3 gap-8">
            <article class="bg-white p-6 rounded-3xl flex items-center gap-x-6">
              <div>
                <figure
                  class="w-20 h-20 bg-royal-gray-100 rounded-full"
                ></figure>
              </div>

              <div class="">
                <h4 class="heading-card">Dashboards as a Service</h4>
                <p class="text-base text-royal-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Amet diam
                </p>
              </div>
            </article>
            <article class="bg-white p-6 rounded-3xl flex items-center gap-x-6">
              <div>
                <figure
                  class="w-20 h-20 bg-royal-gray-100 rounded-full"
                ></figure>
              </div>
              <div class="">
                <h4 class="heading-card">Dashboards as a Service</h4>
                <p class="text-base text-royal-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Amet diam
                </p>
              </div>
            </article>
            <article class="bg-white p-6 rounded-3xl flex items-center gap-x-6">
              <div>
                <figure
                  class="w-20 h-20 bg-royal-gray-100 rounded-full"
                ></figure>
              </div>
              <div class="">
                <h4 class="heading-card">Dashboards as a Service</h4>
                <p class="text-base text-royal-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Amet diam
                </p>
              </div>
            </article>
          </div>
        </div>
      </section> -->
      <!-- Resources -->
      <section data-aos="fade-up" class="mt-20">
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
                <h4 class="heading-card mt-2">Mobius Smart City Solution</h4>
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
                <h4 class="heading-card mt-2">Mobius Smart City Solution</h4>
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
                <h4 class="heading-card mt-2">Mobius Smart City Solution</h4>
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
                <h4 class="heading-card mt-2">Mobius Smart City Solution</h4>
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
      <!-- Expert -->
      <section
        data-aos="fade-up"
        class="my-20 bg-yellow-graphics pt-12 lg:pt-0"
      >
        <article
          class=" mx-auto px-4 lg:pl-4 lg:px-0 grid lg:grid-cols-3 items-center"
        >
          <div class="px-8 lg:col-span-2">
            <h2 class="heading-section">
              Get in touch with our Certified Solutions Expert
            </h2>
            <p class="body-text mt-3">
              Get expert assistance on Custom Solutions and Enquiries
            </p>
            <a class="btn btn-filled mt-12" href="#"> Book a Demo </a>
          </div>
          <div class="md:col-span-1 mt-8 md:mt-0">
            <img
              class="w-full"
              src="../public/images/group.png"
              alt="Expert Group"
            />
          </div>
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
                <a class="nav-link" href="#">Hola Verse</a>
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
    <script src="../src/navbar.js"></script>
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

`

return data;
    }

// export default generator;

module.exports = {
  gen: generator,

};