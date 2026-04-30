// a function is code that waits to run until it is called

function changeTheme() {
    // ... code here;
}

// calling the function
if("something occurs") {
    changeTheme();
}

// event listeners
// code that waits to run until the event it is waiting for happens

let selectElem = document.querySelector('#theme-select');

// event to listen for, function name to execute when event is detected
selectElem.addEventListener('change', changeTheme); // when calling a function in an event listener, do not add the parenthesis
    // event listeners will magically pass needed parameters into the function without me declaring them

// conditionals
// if/else statements
if (current === 'ocean') {
    // do something;
    console.log("hello");
} else if (current === 'forest') {
    // do something else;
    console.log("goodbye");
} else {
    // do the default;
    console.log("what")
}