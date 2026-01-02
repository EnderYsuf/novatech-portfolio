const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section, .product-card, .vacancy-card, .member").forEach(el => {
    observer.observe(el);
});