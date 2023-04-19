var forms = document.getElementById("case-study-form1")
console.log(forms,"hellllllllllllllllllllllllllllllllll")
var output =        ` <div class="flex flex-col items-center justify-center px-10 " style="margin-top:50%;tranform:translateY(-50%);width:300px;margin-left:25%;">
                        <img src="../public/images/Success.svg"></img>
                        <h1 class="text-center">Thank you for choosing Mobius. Our Platform Team will get in touch to get you started.</h1>
                        </div>`
var run = () => {

        forms.innerHTML = output
}