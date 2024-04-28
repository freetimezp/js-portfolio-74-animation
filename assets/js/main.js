let menuIn = document.querySelector(".menu-in");
let menu = document.querySelector(".menu2");

menuIn.onclick = function () {
    menu.classList.add('active');
}


let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line4 = document.querySelector(".line4");

let firstShow1 = document.querySelector(".first-show1");
let firstShow2 = document.querySelector(".first-show2");
let firstShow3 = document.querySelector(".first-show3");
let firstShow4 = document.querySelector(".first-show4");


let Style1 = {
    background: "#0a121d",
    boxShadow: `0px 0px 10px #219cf3, 3px 2px 1px #00e9de, inset 10px 0px 20px #080a11, 
        inset -96px -30px 100px #090912, inset 6px -26px 120px #0b83ff`,
    border: "2px solid transparent"
}

let StyleLineShow = {
    top: "100%",
    opacity: "1",
    transition: ".6s ease-out .3s"
}

let StyleLineHide = {
    top: "50%",
    opacity: "0",
    transition: ".2s ease-out"
}

let StyleBoxShow = {
    transform: "translateY(0px)",
    opacity: "1",
    transition: ".6s ease-out .3s",
    zIndex: '1',
}

let StyleBoxHide = {
    transform: "translateY(30px)",
    opacity: "0",
    transition: ".2s ease-out",
    zIndex: '-1',
}


box1.onmouseenter = function () {
    Object.assign(box1.style, Style1);
    box2.style = 'unset';
    box3.style = 'unset';
    box4.style = 'unset';

    Object.assign(line1.style, StyleLineShow);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineHide);

    Object.assign(firstShow1.style, StyleBoxShow);
    Object.assign(firstShow2.style, StyleBoxHide);
    Object.assign(firstShow3.style, StyleBoxHide);
    Object.assign(firstShow4.style, StyleBoxHide);
}

box2.onmouseenter = function () {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    Object.assign(box2.style, Style1);
    box3.style = 'unset';
    box4.style = 'unset';

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineShow);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineHide);

    Object.assign(firstShow1.style, StyleBoxHide);
    Object.assign(firstShow2.style, StyleBoxShow);
    Object.assign(firstShow3.style, StyleBoxHide);
    Object.assign(firstShow4.style, StyleBoxHide);
}

box3.onmouseenter = function () {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    box2.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    Object.assign(box3.style, Style1);
    box4.style = 'unset';

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineShow);
    Object.assign(line4.style, StyleLineHide);

    Object.assign(firstShow1.style, StyleBoxHide);
    Object.assign(firstShow2.style, StyleBoxHide);
    Object.assign(firstShow3.style, StyleBoxShow);
    Object.assign(firstShow4.style, StyleBoxHide);
}

box4.onmouseenter = function () {
    box1.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    box2.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    box3.style = 'border: 2px solid #666666; box-shadow: unset; background: unset;';
    Object.assign(box4.style, Style1);

    Object.assign(line1.style, StyleLineHide);
    Object.assign(line2.style, StyleLineHide);
    Object.assign(line3.style, StyleLineHide);
    Object.assign(line4.style, StyleLineShow);

    Object.assign(firstShow1.style, StyleBoxHide);
    Object.assign(firstShow2.style, StyleBoxHide);
    Object.assign(firstShow3.style, StyleBoxHide);
    Object.assign(firstShow4.style, StyleBoxShow);
}










