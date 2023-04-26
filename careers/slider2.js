first_slider = document.getElementsByClassName("first");
second_slider = document.getElementsByClassName("images");
let counter1 = 0;
let counter = 0 ;

let perks = [
  [
    "Flexible work schedule",
    "Allow employees to work when they are most productive and offer the option to work remotely or from home. This can improve work-life balance and reduce commuting time and expenses.",
    "1.svg"
  ],
  [
    "Professional development opportunities",
    "nvest in your employees' personal and professional growth by offering training, workshops, and conferences. This can help them stay ahead of the curve and increase their value to the company.",
    "2.svg"
  ],
  [
    "Collaborative work environment",
    "Foster a culture of collaboration, where employees are encouraged to share their ideas, opinions, and feedback. This can lead to more innovative solutions and better problem-solving.",
    "3.svg"
  ],
  [
    "Wellness programs",
    "Promote a healthy lifestyle by offering gym memberships, yoga classes, or healthy snacks in the office. This can help reduce stress, increase productivity, and improve employee morale.",
    "4.svg"
  ],
  [
    "Generous time off",
    "Provide employees with ample vacation time, sick leave, and personal days. This can help them recharge and come back to work refreshed and energized.",
    "5.svg"
  ],
  [
    "Stock options",
    "Give employees a stake in the company's success by offering stock options or equity. This can help align their interests with the company's goals and motivate them to work towards long-term success.",
    "6.svg"
  ]
]

let testimonails = [
  ["",
   " At Gaian apart from my usual work, I have also been included in the company's ‘Change Management’ team. This is what I love most about the company–the level of inclusion that it offers even for a new joinee. I also appreciate the transparency between us and the administration, where ideas are welcomed and discussed! It all makes me feel as though I am part of a large and loving family! People that I work with on a daily basis are amazing and that is one of the great reasons why I love working here."],
   ["",
    " Gaian offers an excellent working experience which supports you to widen your learning scope.I really appreciate that recognition is given when it’s deserved, and help offered when needed. I feel like I’ve been kept on track with the right amount of supervision from talented and knowledgeable people. I have been encouraged to develop the skills and access the support I need to take on a number challenging roles and projects."],
    ["",
    " Ever since I joined GAIAN, it has been a learning session each day. It has created extremely rewarding experience in terms of knowledge enhancement and skills acquisition. Its pleasant work environment allows me to contribute to the best of my abilities. "],
    ["",
    " Ever since I joined GAIAN, it has been a learning session each day. It has created extremely rewarding experience in terms of knowledge enhancement and skills acquisition. Its pleasant work environment allows me to contribute to the best of my abilities. "],
    ["",
    " Ever since I joined GAIAN, it has been a learning session each day. It has created extremely rewarding experience in terms of knowledge enhancement and skills acquisition. Its pleasant work environment allows me to contribute to the best of my abilities. "],
    ["",
    " Ever since I joined GAIAN, it has been a learning session each day. It has created extremely rewarding experience in terms of knowledge enhancement and skills acquisition. Its pleasant work environment allows me to contribute to the best of my abilities. "],

]

let z = setInterval(function () {
  intervals = ["0px", "-20%", "-40%", "-60%"];


  counter++;
  counter1++;
  if (counter > 3) {
    counter = 0;
  }
  if(counter1 > 5 ){
    counter1 = 0
  }
  content_changer(counter1);
  content_changer2(counter);
}, 5000);

function call() {
  console.log("hello");

  button = event.target;
  button_id = button.getAttribute("id");
  console.log(button.style);

  button.style = "color:white;background-color:white ;";

  first_slider = document.getElementsByClassName("first");
  second_slider = document.getElementsByClassName("images");

  if (button_id == "1") {
    content_changer(0);
  } else if (button_id == "2") {
    content_changer(1);
  } else if (button_id == "3") {
    content_changer(2);
  } else if (button_id == "4") {
    content_changer(3);
  }
  clearInterval(z);
}

function call2() {
  button = event.target;
  button_id = button.getAttribute("id");
  console.log("hello");

  if (button_id == "1a") {
    content_changer2(0);
  } else if (button_id == "2a") {
    content_changer2(1);
  } else if (button_id == "3a") {
    content_changer2(2);
  } else if (button_id == "4a") {
    content_changer2(0);
  }
  clearInterval(z);
}






function content_changer(index) {
  console.log(index)
  first_slider[0].innerHTML = `
  <div data-aos="fade-up" >
 <h3 class="heading-section">${perks[index][0]}</h3>
 <p class="body-text !text-lg mt-4">
   ${perks[index][1]}
   </p>

</div>
  
  
  `;
  second_slider[0].innerHTML = `            
  <div data-aos="fade-left">

   <img
   class="inline-block fade"
   src="../public/images/careers/${perks[index][2]}"
   alt="Emergency Ambulance Service"
   />
   </div>`;
}

function content_changer2(index) {
  console.log(index,"index of 2")
  first_slider[2].innerHTML = `
  <div data-aos="fade-up"

  >

  <h1 class="text-3xl">${testimonails[index][0]}</h1>
  <h2 class="body-text">${testimonails[index][1]}</h2>
</div>`;
  second_slider[1].innerHTML = `              
  <div data-aos="fade-left"
  
  
  >
  <img  src="../public/images/values/106.png\" alt="">
</div>`;
}


content_changer(0);
content_changer2(0)