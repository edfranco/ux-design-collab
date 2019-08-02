// const input;
// if (input.contains('@') && input.contains('.')) {

// } else {
//     console.log('Please input a valid email');
// }

// if(input.innerHTML = ''){
//     console.log('Please input something')
// }

//Const Variables 
const navButton = document.getElementById('navButton');
const sideNav = document.getElementById('sideNav');
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
        console.log(toggle)
    } else {
        untoggleSideNav()
        console.log(toggle)
    }
}, false)
