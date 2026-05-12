// .getElementsByClassName returns a list, if i use it, i then have to define an index to use
// this is the same for basicly everything that gets from the DOM exept querySelector and getElementByID

let menuButton = document.querySelector(".menu-btn");

console.log(menuButton);

// remember not to end a function with parentesis wen put in a EventListener
// js will figure out what to pass on its own, it will always pass the event into the first parameter
menuButton.addEventListener("click", handleMenueButtonClick);

// a function that responds to an event listener is often named handle[the event]
function handleMenueButtonClick(event) {
    console.log(event); // this has all of the information about the event

    // toggle on/off the menu display

    // grab the nav from the DOM
    let menu = document.querySelector("nav");
    // toggle the .hide class on/off
    menu.classList.toggle("hide");

    // applys the change to the menu button
    menuButton.classList.toggle("change");
}