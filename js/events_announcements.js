    //  event and announcement cards
document.addEventListener("DOMContentLoaded", () => {
    // Select the event and announcement cards
    const eventCard = document.querySelector('.custom-card-events');
    const announcementCard = document.querySelector('.custom-card-announcements');

    // Observer options to trigger when the element is 20% visible
    const options = {
        root: null,
        threshold: 0.8, // Trigger when 20% of the element is visible
    };

    // Intersection Observer callback to add 'visible' class
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add 'visible' class to trigger animation
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    // Observe the event and announcement cards
    observer.observe(eventCard);
    observer.observe(announcementCard);
});

