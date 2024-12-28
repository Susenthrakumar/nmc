// Small banner
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner-section");

    // Define options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 30% of the element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When 30% of the banner is in view, trigger the fade-in with a delay
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing after it's triggered
            }
        });
    }, options);

    // Start observing the banner
    observer.observe(banner);
});
