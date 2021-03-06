
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

let options = {
    threshold : 0.5,
    rootMargin : "0px 0px -100px 0px"
};

let appearOnScroll = new IntersectionObserver(slideAnime, options);

function slideAnime(entries){
entries.forEach(entry => {
if(!entry.isIntersecting){
    return;
}else{
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
}

});
}

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})


/*gsap.to(".hero-text", {duration: 2, y:1500, scale: -1, rotate:180});
var tl = gsap.timeline({repeat: 30, repeatDelay: 1});
gsap.to(".hero-img", {duration: 1, scale: 1});
*/

function delay(n){
    n = n || 2000;
    return new promise(done => {
        setTimeout(()=>{
            done();
        }, n);
    }); 
}

function pgTransition() {
    var tl = gsap.timeline();
    tl.to('ul.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .2, delay: .1})
}

barba.init({
    sync: true,
    transitions: [{
        async leave(data){
            const done = this.async();

            pgTransition();
            await delay(1500);
            done();
        }
    }]
})
