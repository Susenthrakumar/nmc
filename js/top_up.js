// Get the button
let backToTopButton = document.getElementById("backToTop");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show"); // Show the button
    } else {
        backToTopButton.classList.remove("show"); // Hide the button
    }
};

// When the button is clicked, scroll to the top of the document
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};