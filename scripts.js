// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("nav", { duration: 1, y: -50, opacity: 0, ease: "power4.out" });
    gsap.from(".carousel-item", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".carousel",
            start: "top 80%",
        }
    });
    gsap.from("footer", {
        duration: 1,
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
        }
    });
});