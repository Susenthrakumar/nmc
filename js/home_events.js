document.addEventListener("DOMContentLoaded", () => {
    const eventCards = document.querySelectorAll(".event-card");

    const revealCards = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const card = entry.target;

                // Add a delay based on the index for a staggered effect
                card.style.transitionDelay = `${index * 0.2}s`; // 0.2s delay between each card
                card.classList.add("visible");

                observer.unobserve(card); // Stop observing once revealed
            }
        });
    };

    const options = {
        root: null,
        threshold: 0.10, // Trigger earlier
    };

    const observer = new IntersectionObserver(revealCards, options);

    eventCards.forEach((card, index) => {
        card.classList.add(index % 2 === 0 ? "left" : "right");
        observer.observe(card); // Observe each card
    });
});
