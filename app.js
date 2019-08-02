// HTML Template
const afterSubmissionTemplate = `
<h1>Thanks for subscribing!</h1>
<div>
    <p class='verification'>You'll be receving a verification email at</p>
</div>
<div>   
    <p class="second">Once confirmed, you'll have access to our sweet, sweet content</p>
</div> 
    <div>
        <img src="./public/images/Screen Shot 2019-08-01 at 3.37.45 PM.png">
    </div>
`

//Const Variables 
const navButton = document.getElementById('navButton');
const sideNav = document.getElementById('sideNav');
const $clear = $('.clear');
console.log($clear);
let toggle = false;


// Functions
const toggleSideNav = (event) => {
    sideNav.style.width = "50vw";
    sideNav.style.display = "block"
    toggle = true;
}

const untoggleSideNav = event => {
    sideNav.style.width = "0vw";
    sideNav.style.display = "none"
    toggle = false;
}

navButton.addEventListener('click', event => {
    if (toggle === false) {
        toggleSideNav()
    } else {
        untoggleSideNav()
    }
}, false)

$clear.on('click', event => {
    $('main').empty();
    $('main').append(afterSubmissionTemplate)
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}
