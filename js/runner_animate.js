// runner animate

    document.addEventListener("DOMContentLoaded", function () {
    const statBoxes = document.querySelectorAll(".stat-box");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    startCounter(entry.target.querySelector(".stat-number")); // Start counter for visible stat box
                    observer.unobserve(entry.target); // Stop observing once animation is triggered
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    statBoxes.forEach((box) => {
        observer.observe(box);
    });

    // Function to animate counters
    function startCounter(counter) {
        const target = +counter.getAttribute("data-target");
        const increment = Math.ceil(target / 200); // Adjust speed by dividing target

        const updateCounter = () => {
            const current = +counter.innerText;

            if (current < target) {
                counter.innerText = Math.min(current + increment, target); // Increment until target is reached
                setTimeout(updateCounter, 20); // Adjust speed in milliseconds
            } else {
                counter.innerText = target; // Ensure it stops exactly at the target
            }
        };
        updateCounter();
    }
});

