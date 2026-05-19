/* stars */

const colors = [
'#ff8fab',
'#ffd166',
'#80ed99',
'#74c0fc',
'#c77dff'
];

for(let i=0;i<45;i++){

    let star = document.createElement('div');

    star.classList.add('star');

    star.innerHTML='★';

    star.style.left=Math.random()*100+'vw';
    star.style.top=Math.random()*100+'vh';

    star.style.color=colors[
        Math.floor(Math.random()*colors.length)
    ];

    star.style.fontSize=
    (15+Math.random()*20)+'px';

    document.body.appendChild(star);
}

/* no button kabur */

const noBtn =
document.getElementById('noBtn');

function moveButton(){

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 20;

    const maxX =
    window.innerWidth - btnWidth - padding;

    const maxY =
    window.innerHeight - btnHeight - padding;

    const randomX = Math.floor(
        Math.random() * (maxX - padding) + padding
    );

    const randomY = Math.floor(
        Math.random() * (maxY - padding) + padding
    );

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const rotate =
    Math.random() * 30 - 15;

    noBtn.style.transform =
    `rotate(${rotate}deg)`;
}

noBtn.addEventListener(
    "mouseover",
    moveButton
);

noBtn.addEventListener(
    "touchstart",
    (e)=>{
        e.preventDefault();
        moveButton();
    }
);

/* switch page */

function switchPage(hide, show){

    const current =
    document.getElementById(hide);

    const next =
    document.getElementById(show);

    current.style.transform =
    "translateX(-120px) scale(0.8) rotate(-8deg)";

    current.style.opacity = "0";

    current.style.filter = "blur(10px)";

    setTimeout(()=>{

        current.classList.remove("active");

        next.classList.add("active");

        next.style.transform =
        "translateX(120px) scale(0.8) rotate(8deg)";

        next.style.opacity = "0";

        next.style.filter = "blur(10px)";

        setTimeout(()=>{

            next.style.transform =
            "translateX(0px) scale(1) rotate(0deg)";

            next.style.opacity = "1";

            next.style.filter = "blur(0px)";

        },50);

    },500);
}

/* pages */

function nextPage(){
    switchPage("page1","musicPage");
}

function startExperience(){

    const music =
    document.getElementById("bgMusic");

    music.play();

    switchPage("musicPage","page2");
}

function nextLetter(){
    switchPage("page2","page3");
}

function showFinal(){
    switchPage("page3","page4");
}