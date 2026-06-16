// ======================================
// RASMALAI FACTORY
// ======================================



const rasmalaiEmoji =
document.getElementById("rasmalaiEmoji");

const rasmalaiTitle =
document.getElementById("rasmalaiTitle");

const rasmalaiText =
document.getElementById("rasmalaiText");

const nextStepBtn =
document.getElementById("nextStepBtn");

if(
    rasmalaiEmoji &&
    rasmalaiTitle &&
    rasmalaiText &&
    nextStepBtn
){

    const steps = [

    {
    emoji:"🥛",
    title:"Step 1: Boil Milk",
    text:"Let's start by boiling fresh milk."
    },

    {
    emoji:"⚪",
    title:"Step 2: Make Rasgullas",
    text:"Soft fluffy rasgullas are ready."
    },

    {
    emoji:"✨",
    title:"Step 3: Add Saffron",
    text:"Adding saffron and sweetness."
    },

    {
    emoji:"🍮",
    title:"Step 4: Serve Rasmalai",
    text:"Fresh rasmalai is ready!"
    },

    {
    emoji:"🎉",
    title:"Special Birthday Serving",
    text:"A bowl of rasmalai for the birthday girl 💖"
    }

    ];

    let currentStep = 0;

    nextStepBtn.addEventListener("click", () => {

        currentStep++;

        if(currentStep < steps.length){

            rasmalaiEmoji.innerHTML =
            steps[currentStep].emoji;

            rasmalaiTitle.innerHTML =
            steps[currentStep].title;

            rasmalaiText.innerHTML =
            steps[currentStep].text;

            rasmalaiEmoji.classList.remove(
            "rasmalai-animation"
            );

            void rasmalaiEmoji.offsetWidth;

            rasmalaiEmoji.classList.add(
            "rasmalai-animation"
            );

        }

        if(currentStep === steps.length - 1){

            nextStepBtn.innerHTML =
            "🍮 Enjoy Rasmalai";

        }

    });

}

    






// ======================================
// GIFT BOX SURPRISE
// ======================================

const giftBox = document.querySelector(".gift-box");
const giftMessage = document.getElementById("giftMessage");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        giftBox.innerHTML = "🎉";

        giftBox.style.transform = "scale(1.15)";

        giftMessage.style.display = "block";

    });

}



// ======================================
// ARE YOU STILL MAD AT ME
// ======================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const pleadMessage = document.getElementById("pleadMessage");
const celebrationScreen =
document.getElementById("celebrationScreen");

let escapeCount = 0;

const messages = [


"🥺 please...",
"🌸 pretty please...",
"🍮 pretty please with rasmalai...",
"😭 i even made a whole website...",
"💖 please don't stay mad...",
"👉👈 one last chance..."


];

// YES button runs away
if (yesBtn) {


yesBtn.addEventListener("mouseover", () => {

    if (escapeCount < 6) {

        const container =
            document.querySelector(".button-container");

        const maxX =
            container.offsetWidth - yesBtn.offsetWidth;

        const maxY =
            container.offsetHeight - yesBtn.offsetHeight;

        const randomX =
            Math.floor(Math.random() * maxX);

        const randomY =
            Math.floor(Math.random() * maxY);

        yesBtn.style.left = randomX + "px";
        yesBtn.style.top = randomY + "px";

        pleadMessage.innerText =
            messages[escapeCount];

        escapeCount++;

    }
    else {

        pleadMessage.innerText =
            "😮 Okay fine... now you can click it.";

    }

});


}

// ======================================
// YES BUTTON CLICK
// ======================================

if (yesBtn) {


yesBtn.addEventListener("click", () => {

    const answer = confirm(
        "🥺 Still mad?\n\nPress OK = Still Mad\nPress Cancel = Fine"
    );

    if (answer) {

        const answer2 = confirm(
            "🍮 Pretty please?\n\nStill Mad?"
        );

        if (answer2) {

            const answer3 = confirm(
                "😭 I made a whole website...\n\nStill mad?"
            );

            if (answer3) {

                alert(
                    "💖 Pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee 🥺"
                );

            }
            else {

                showCelebration();

            }

        }
        else {

            showCelebration();

        }

    }
    else {

        showCelebration();

    }

});


}

// ======================================
// NO BUTTON CLICK
// ======================================

if (noBtn) {


noBtn.addEventListener("click", () => {

    showCelebration();

});


}

// ======================================
// CELEBRATION FUNCTION
// ======================================

function showCelebration() {


celebrationScreen.style.display = "flex";

createHearts();

launchConfetti();


}

// ======================================
// FLOATING HEARTS
// ======================================

function createHearts() {


for (let i = 0; i < 30; i++) {

    const heart =
        document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        (Math.random() * 20 + 20) + "px";

    heart.style.zIndex = "10000";

    document.body.appendChild(heart);

    const duration =
        Math.random() * 3000 + 2000;

    heart.animate(

        [
            {
                transform:
                    "translateY(0px)"
            },
            {
                transform:
                    "translateY(-120vh)"
            }
        ],

        {
            duration: duration,
            iterations: 1
        }

    );

    setTimeout(() => {

        heart.remove();

    }, duration);

}


}

// ======================================
// CONFETTI EFFECT
// ======================================

function launchConfetti() {


for (let i = 0; i < 100; i++) {

    const confetti =
        document.createElement("div");

    confetti.innerHTML =
        ["🎉", "🌸", "💖", "🎀", "✨"]
        [Math.floor(Math.random() * 5)];

    confetti.style.position = "fixed";

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.top = "-50px";

    confetti.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    confetti.style.zIndex = "10000";

    document.body.appendChild(confetti);

    const duration =
        Math.random() * 4000 + 3000;

    confetti.animate(

        [
            {
                transform:
                    "translateY(0)"
            },
            {
                transform:
                    "translateY(120vh)"
            }
        ],

        {
            duration: duration,
            iterations: 1
        }

    );

    setTimeout(() => {

        confetti.remove();

    }, duration);

}


}

// ======================================
// HERO BUTTON SCROLL
// ======================================

const mainBtn =
document.querySelector(".main-btn");

if (mainBtn) {


mainBtn.addEventListener("click", () => {

    document.querySelector(".story")
        .scrollIntoView({
            behavior: "smooth"
        });

});

for(let i=0;i<50;i++){

    const star=document.createElement("div");

    star.className="sparkle";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=
    Math.random()*5+"s";

    document.body.appendChild(star);
}
// ======================================
// MUSIC PLAYER
// ======================================

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

if(musicBtn && bgMusic){

    musicBtn.addEventListener("click",()=>{

        bgMusic.volume = 0.4;

        bgMusic.play();

        musicBtn.innerHTML =
        "💖 Now Playing";

    });

}
document.addEventListener("click", () => {

    const bgMusic = document.getElementById("bgMusic");

    if(bgMusic){
        bgMusic.volume = 0.5;
        bgMusic.play();
    }

}, { once:true });
}
