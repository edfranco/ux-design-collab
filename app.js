// HTML Template
const afterSubmissionTemplate = `

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
    $('main').append(`<h1>Some Text</h1>`)
})
