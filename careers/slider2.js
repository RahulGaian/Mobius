let counter = 0;
let z = setInterval(function(){
  first_slider = document.getElementsByClassName('first');
  second_slider =  document.getElementsByClassName("images");
  intervals = ["0px","-20%","-40%","-60%"]
  first_slider[0].style.marginLeft = intervals[counter]
  second_slider[0].style.marginLeft = intervals[counter]
  first_slider[3].style.marginLeft = intervals[counter]
  second_slider[1].style.marginLeft = intervals[counter]

  counter++;
  if(counter > 3){
    counter = 0;
  }
}, 5000);

function call(){
  console.log("hello")
  button = event.target.getAttribute("for")
  radio = document.getElementById(button + "1")
  radio.checked = true
  console.log(button+"1")
  console.log(radio,radio.checked)
  first_ele = document.getElementsByClassName("images")
  first_slider = document.getElementsByClassName('first');

  console.log(first_ele[0])
  if(button == "radio1"){
    first_slider[0].style.marginLeft = "0px"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[0].style.marginLeft = "0px"
  }, 500);
  }
  else if(button == "radio2"){
    first_slider[0].style.marginLeft = "-20%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[0].style.marginLeft = "-20%"
  }, 500);

  }
  else if(button == "radio3"){
    first_slider[0].style.marginLeft = "-40%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[0].style.marginLeft = "-40%"
    }, 500);

  }
  else if(button == "radio4"){
    first_slider[0].style.marginLeft = "-60%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[0].style.marginLeft = "-60%"
  }, 500);

  }
  clearInterval(z)
}



function call2(){
  console.log("hello")
  button = event.target.getAttribute("for")
  radio = document.getElementById(button + "1a")
  radio.checked = true
  console.log(button+"1a")
  console.log(radio,radio.checked)
  first_ele = document.getElementsByClassName("images")
  first_slider = document.getElementsByClassName('first');

  console.log(first_ele[1])
  if(button == "radio1a"){
    first_slider[3].style.marginLeft = "0px"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[1].style.marginLeft = "0px"
    }, 500);
    
  }
  else if(button == "radio2a"){
    first_slider[3].style.marginLeft = "-20%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[1].style.marginLeft = "-20%"
    }, 500);
    

  }
  else if(button == "radio3a"){
    first_slider[3].style.marginLeft = "-40%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[1].style.marginLeft = "-40%"
    }, 500);
    

  }
  else if(button == "radio4a"){
    first_slider[3].style.marginLeft = "-60%"
    setTimeout(function(){
      console.log("THIS IS");
      first_ele[1].style.marginLeft = "-60%"    }, 500);
    
   

  }
  clearInterval(z)
}