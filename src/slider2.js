let counter = 0;
let z = setInterval(function(){
  first_slider = document.getElementsByClassName('first');
  second_slider =  document.getElementsByClassName("images");
  intervals = ["0px","-20%","-40%","-60%"]
  first_slider[0].style.marginLeft = intervals[counter]
  second_slider[0].style.marginLeft = intervals[counter]

  counter++;
  if(counter > 3){
    counter = 0;
  }
}, 5000);

function call(){
  //console.log("hello")
  button = event.target.getAttribute("for")
  radio = document.getElementById(button + "1")
  radio.checked = true
  //console.log(button+"1")
  //console.log(radio,radio.checked)
  first_ele = document.getElementsByClassName("images")
  first_slider = document.getElementsByClassName('first');

  //console.log(first_ele[0])
  if(button == "radio1"){
    first_slider[0].style.marginLeft = "0px"

    first_ele[0].style.marginLeft = "0px"
  }
  else if(button == "radio2"){
    first_slider[0].style.marginLeft = "-20%"

    first_ele[0].style.marginLeft = "-20%"

  }
  else if(button == "radio3"){
    first_slider[0].style.marginLeft = "-40%"

    first_ele[0].style.marginLeft = "-40%"

  }
  else if(button == "radio4"){
    first_slider[0].style.marginLeft = "-60%"

    first_ele[0].style.marginLeft = "-60%"

  }
  clearInterval(z)
}
