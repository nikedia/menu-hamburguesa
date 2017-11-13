var button = document.getElementById("btn");

// Instructions to run when button is clicked.
function showMenu() {

    // Create var to store option nav elements.
    // document.getElementById(), brings elements from html to js by its id.
    var menu = document.getElementById("opcs-menu");

    if (menu.classList.contains("disabled-menu")) {
        // console.log('show');
        // To apply style's been defined in js.
        menu.classList.remove("disabled-menu");
        menu.classList.add("enabled-menu");
    } else {
        // console.log('hide');
        menu.classList.remove("enabled-menu");
        menu.classList.add("disabled-menu");
    }
}

button.addEventListener("click", showMenu);