first_slider = document.getElementsByClassName('first');
second_slider =  document.getElementsByClassName("images");
let counter = 0;
let z = setInterval(function(){

  intervals = ["0px","-20%","-40%","-60%"]
  content_changer()
  content_changer2()

  counter++;
  if(counter > 3){
    counter = 0;
  }
}, 5000);

function call(){
  console.log("hello")

  button = event.target;
  button_id = button.getAttribute("id")
  console.log(button.style)
  
 button.style = "color:white;background-color:white ;"

 first_slider = document.getElementsByClassName('first');
 second_slider = document.getElementsByClassName("images")

  
  if(button_id == "1"){
      content_changer();
  }
  else if(button_id == "2"){
    content_changer()
  }
  else if(button_id == "3"){

    content_changer()
  }
  else if(button_id == "4"){

    content_changer();

  }
  clearInterval(z)
}



function call2(){

  button = event.target;
  button_id = button.getAttribute("id")
  console.log("hello")

  if(button_id == "1a"){
    content_changer2()
    
  }
  else if(button_id == "2a"){
    content_changer2()


  }
  else if(button_id == "3a"){

    content_changer2()


  }
  else if(button_id == "4a"){

    
    content_changer2()


  }
  clearInterval(z)
}



function content_changer () {
  first_slider[0].innerHTML = `
  <div data-aos="fade-up">
 <h3 class="heading-section">Customized Mindfulness and Wellness programs</h3>
 <p class="body-text !text-lg mt-4">
   Specialised workshops and health check-ups are conducted by various health and wellness organizations to promote a healthy lifestyle among the employees
   </p>

</div>
  
  
  `
  second_slider[0].innerHTML = `            
  <div data-aos="fade-left">

   <img
   class="inline-block fade"
   src="../public/images/city.svg"
   alt="Emergency Ambulance Service"
   />
   </div>`
}



function content_changer2(){
  first_slider[2].innerHTML = `
  <div data-aos="fade-up"

  data-aos-offset="0">

  <h1 class="text-3xl">"Testimonial Title"</h1>
  <h2 class="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente rem, dicta quisquam sequi, dolore enim facilis nisi quasi quos laborum dignissimos voluptate atque, excepturi illo error ullam totam officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est esse pariatur quibusdam beatae, voluptates repudiandae cumque tempora delectus facilis laudantium possimus error dolorem. Magnam odio dolorum illo excepturi. Molestiae, ut!</h2>
</div>`
  second_slider[1].innerHTML = `              
  <div data-aos="fade-left"
  
  
  data-aos-offset="0">
  <img  src="../public/images/values/106.png" alt="">
</div>`

}