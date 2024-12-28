
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 50);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
