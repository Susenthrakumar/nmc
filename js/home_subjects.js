//Subjects home page
document.addEventListener("DOMContentLoaded", () => {
    const subjectCards = document.querySelectorAll('.subject-card');

    const options = {
        root: null,
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    subjectCards.forEach(card => {
        observer.observe(card);
    });
});


