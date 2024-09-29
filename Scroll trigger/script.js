gsap.from(".page1 #circle", {
    scale: 0,
    delay: 0.5,
    duration: 1,
    rotate: 720
})
gsap.from(".page2 #circle", {
    scale: 0,
    delay: 0.5,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: ".page2 #circle",
        scroller:"body",
        // markers:true,
        // start:"top 80%",
        // end:"bottom 20%",
        scrub:1
    }
})
gsap.from(".page3 #circle", {
    scale: 0,
    delay: 0.5,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: ".page3 #circle",
        scroller:"body"
    }
})