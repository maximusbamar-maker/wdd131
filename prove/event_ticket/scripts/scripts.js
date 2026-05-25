const form = document.querySelector("#fsyForm");
const ticket_type = document.querySelector("#ticket_type");
const student_i_num_container = document.querySelector("#student_i_num_container");
const access_code_container = document.querySelector("#access_code_container")
const i_num = document.querySelector("#i_num");
const access_code = document.querySelector("#access_code")
const output = document.querySelector("#output");

function updateIDField() {
    const value = ticket_type.value;

    // if it is a student, get their ID
    if (value === "student") {
        student_i_num_container.toggleAttribute("hidden");

    // if it is a guest ask for the access code
    } else if (value === "guest") {
        access_code_container.toggleAttribute("hidden");
    }

    // hide irrelevent fields
    if (value != "student" && !student_i_num_container.hasAttribute("hidden")) {
        student_i_num_container.toggleAttribute("hidden");
    }

    if (value != "guest" && !access_code_container.hasAttribute("hidden")) {
        access_code_container.toggleAttribute("hidden");
    }
}


ticket_type.addEventListener("change", updateIDField);
updateIDField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}


// count how many digits are in a number
function countDigits(num) {
    if (num === "") {
        return 1
    }

    return Math.abs(num).toString().length;
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.ticket_type.value;
    const event_date = form.event_date.value;

    // Validate the input
    // Ensure that the date is not a past date
    if (isPastDate(event_date)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    // Ensure that students give their I#
    if (type === 'student' && countDigits(i_num.value) != 9)  {
        output.textContent = "Please enter a 9-digit I#"
        return
    }

    // Ensure that guests access code is correct
    if (type === 'guest' && access_code.value != 'EVENT131') {
        output.textContent = "Invalid Access Code"
        return
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${event_date}</p>
    `;

    form.reset();
    updateIDField();
});