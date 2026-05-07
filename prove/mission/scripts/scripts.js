function switch_theme() {
    // get needed elements
    let para = document.querySelector("button");
    let doc = document.querySelector("body");
    let logo = document.querySelector("img");
    let name = document.querySelector("h2");

    console.log("click") // test

    if (para.textContent === "Light Mode") {
        // turn to dark mode if it was light mode
        para.textContent = "Dark Mode";
        doc.classList.toggle('dark');
        name.classList.toggle('dark-h2')
        logo.src = "images/byui-dark.png";
    } else if (para.textContent === "Dark Mode"){
        // turn to light mode if it was dark mode
        para.textContent = "Light Mode";
        doc.classList.toggle('dark');
        name.classList.toggle('dark-h2')
        logo.src = "images/byui.png";
    }
}

document.querySelector("button").addEventListener("click", switch_theme);