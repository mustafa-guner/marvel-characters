 //Animations
 
 //Ironman Flies Animation
 let ironmanFlies = new TimelineMax({repeat:-1})
 ironmanFlies.to(".ironmanFlies", 7, {
    bezier: {
        type: "quadratic",
        values: [
/*p1*/{ x: 0, y: 0 }, { x: 0, y: 30 }, { x: 0, y: 75 },
/*p2*/{ x: 0, y: 90 }, { x: 0, y: 0 }],

        autoRotate: false
    },
    ease: Linear.easeNone
});


 
 let thor = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 1 });

 //Birinci Logo
 thor.to(".logo1", 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let spiderman = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 2 });
 //Ikinci Logo
 spiderman.to('.logo2', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });



 let panther = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 3 });
 //Ikinci Logo
 panther.to('.logo3', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let hulk = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 4 });
 //Ikinci Logo
 hulk.to('.logo4', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let captain = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 5 });
 //Ikinci Logo
 captain.to('.logo5', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let blackwidow = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 6 });
 //Ikinci Logo
 blackwidow.to('.logo6', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let drStrange = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 7 });
 //Ikinci Logo
 drStrange.to('.logo7', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let falcon = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 8 });
 //Ikinci Logo
 falcon.to('.logo8', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });


 let ironman = new TimelineMax({ repeat: -1, repeatDelay: 0, delay: 9 });
 //Ikinci Logo
 ironman.to('.logo9', 9, {
     bezier: {
         type: "quadratic",
         values: [
/*p1*/{ x: 0, y: 0 }, { x: 220, y: 0 }, { x: 220, y: 150 },
/*p2*/{ x: 250, y: 450 }, { x: 0, y: 450 },
/*p3*/{ x: -300, y: 485 }, { x: -300, y: 250 },
/*p4*/{ x: -300, y: 0 }, { x: 0, y: 0 }],
         autoRotate: false
     },
     ease: Linear.easeNone
 });