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


// Functions
const dropNav = (event) => {
    sideNav.style.width = "50vw";
}

navButton.addEventListener('click', dropNav, false)
