
// tl = gsap.timeline()
// gsap.from(".luffy .part h3", {
//     y: "-50",
//     opacity: 0,
//     delay: 0.5,
//     stagger: 0.2
// })
// gsap.from(".luffy .naam h2", {
//     y: "-50",
//     opacity: 0,
//     delay: 1.4
// })
// tl.from(".luffy .main h1", {
//     x: "-250",
//     opacity: 0,
//     delay: 1.8,
//     stagger: 0.2
// })

// tl.from(".luffy .images img", {
//     y: "200",
//     rotate: 45,
//     opacity: 0,
//     stagger: 0.5
// })


// let zoroTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".zoro",  // Start animation when ".zoro" comes into view
//         start: "top 80%",  // Animation starts when the top of ".zoro" is 80% down the viewport
//         end: "bottom 20%", // Animation ends when the bottom of ".zoro" is 20% up the viewport
//     }
// });

// zoroTimeline.from(".zoro .part h3", {
//     y: "-50",
//     opacity: 0,
//     stagger: 0.2
// })
// zoroTimeline.from(".zoro .naam h2", {
//     y: "-50",
//     opacity: 0,
// })
// zoroTimeline.from(".zoro .main h1", {
//     x: "-250",
//     opacity: 0,
//     stagger: 0.2
// })
// zoroTimeline.from(".zoro .images img", {
//     y: "200",
//     rotate: 45,
//     opacity: 0,
//     stagger: 0.5
// });

// gsap.registerPlugin(ScrollTrigger);  // Ensure ScrollTrigger is registered

// Luffy animation (no scroll trigger, this animates immediately)
let tl = gsap.timeline();

gsap.from(".luffy .part h3", {
    y: "-50",
    opacity: 0,
    delay: 0.5,
    stagger: 0.2
});
gsap.from(".luffy .naam h2", {
    y: "-50",
    opacity: 0,
    delay: 1.4
});
tl.from(".luffy .main h1", {
    x: "-250",
    opacity: 0,
    delay: 1.8,
    stagger: 0.2
});
tl.from(".luffy .images img", {
    y: "200",
    rotate: 45,
    opacity: 0,
    stagger: 0.5
});

// Zoro animation with ScrollTrigger (trigger when scrolled into view)
let zoroTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".zoro",   // Start animation when ".zoro" comes into view
        start: "top 80%",   // Trigger when top of ".zoro" hits 80% from the top of the viewport
        end: "bottom 20%",  // End when the bottom of ".zoro" hits 20% from the bottom of the viewpor
    }
});

zoroTimeline.from(".zoro .part h3", {
    y: "-50",
    opacity: 0,
    stagger: 0.2,
})
.from(".zoro .naam h2", {
    y: "-50",
    opacity: 0,
})
.from(".zoro .main h1", {
    x: "-250",
    opacity: 0,
    stagger: 0.2
})
.from(".zoro .images img", {
    y: "200",
    rotate: 45,
    opacity: 0,
    stagger: 0.5
});
// sanji animation with ScrollTrigger (trigger when scrolled into view)
let sanjiTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".sanji",   // Start animation when ".sanji" comes into view
        start: "top 80%",   // Trigger when top of ".sanji" hits 80% from the top of the viewport
        end: "bottom 20%",  // End when the bottom of ".sanji" hits 20% from the bottom of the viewport
        }
});

sanjiTimeline.from(".sanji .part h3", {
    y: "-50",
    opacity: 0,
    stagger: 0.2,
})
.from(".sanji .naam h2", {
    y: "-50",
    opacity: 0,
})
.from(".sanji .main h1", {
    x: "-250",
    opacity: 0,
    stagger: 0.2
})
.from(".sanji .images img", {
    y: "200",
    rotate: 45,
    opacity: 0,
    stagger: 0.5
});

// usopp animation with ScrollTrigger (trigger when scrolled into view)
let usoppTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".usopp",   // Start animation when ".usopp" comes into view
        start: "top 80%",   // Trigger when top of ".usopp" hits 80% from the top of the viewport
        end: "bottom 20%",  // End when the bottom of ".usopp" hits 20% from the bottom of the viewport
        }
});

usoppTimeline.from(".usopp .part h3", {
    y: "-50",
    opacity: 0,
    stagger: 0.2,
})
.from(".usopp .naam h2", {
    y: "-50",
    opacity: 0,
})
.from(".usopp .main h1", {
    x: "-250",
    opacity: 0,
    stagger: 0.2
})
.from(".usopp .images img", {
    y: "200",
    rotate: 45,
    opacity: 0,
    stagger: 0.5
});

