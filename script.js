let imges = [
    "imges/img1.png",
    "imges/img2.png",
    "imges/img3.png",
    "imges/img4.png",
    "imges/img5.png"
]

let colors = [
    "linear-gradient(135deg, #D8BDC4, #f9b3c5)",
    "linear-gradient(135deg, #1E2338, #1c233d)",
    "linear-gradient(135deg, #688679, #689884)",
    "linear-gradient(135deg, #482D1E, #512d1a)",
    "linear-gradient(135deg, #605F61, #78757b)"
];

let titles = [
    "Sony",
    "Bose",
    "JBL",
    "Sennheiser",
    "Audio-Technica"
];

let descriptions = [
    "Sony headphones are known for excellent sound quality, powerful bass, comfortable designs, and advanced noise-cancellation technology.",
    "Bose offers premium headphones with clear audio, excellent noise cancellation, and comfortable designs for long listening sessions.",
    "JBL headphones are popular for powerful sound, deep bass, stylish designs, and reliable performance at different price ranges.",
    "Sennheiser is known for detailed, balanced audio quality and high-performance headphones designed for music lovers and professionals.",
    "Audio-Technica provides high-quality headphones with accurate sound, comfortable construction, and options suitable for both casual and professional use."
];

let prices = [
    "300.00",
    "400.00",
    "500.00",
    "700.00",
    "800.00"
];
let textColors = [
    "#7A1F3D",
    "#FFFFFF",
    "#E8FFF4",
    "#FFE8D6",
    "#FFFFFF"
];

let mainImg = document.querySelector(".mainImg");
let titleElement = document.querySelector(".titel");
let disElement = document.querySelector(".dis");
let priceElement = document.querySelector(".price");

let index = 0;

function change() {

    mainImg.src = imges[index];

  let home = document.querySelector(".home");

home.style.background = colors[index];

    titleElement.innerText = titles[index];

    disElement.innerText = descriptions[index];

    priceElement.innerText = "$" + prices[index];
    titleElement.style.color = textColors[index];
    disElement.style.color = textColors[index];
    priceElement.style.color = textColors[index];
    index++;

    if (index >= imges.length) {
        index = 0;
    }
}

change();

setInterval(change, 2000);

let counter = 0;

const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card1");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const cardWidth = 240; // 220 card + 20 gap

const viewport = track.parentElement;


function moveCards() {

    // Track કેટલું maximum બહાર જઈ શકે
    const maxScroll =
        track.scrollWidth - viewport.clientWidth;

    // Current position
    let move = counter * cardWidth;

    // વધારે આગળ ન જાય
    if (move > maxScroll) {
        move = maxScroll;
    }

    // પાછળ negative ન જાય
    if (move < 0) {
        move = 0;
    }

    track.style.transform =
        `translateX(-${move}px)`;

}


rightBtn.onclick = function () {

    const maxScroll =
        track.scrollWidth - viewport.clientWidth;

    const currentMove =
        counter * cardWidth;

    if (currentMove < maxScroll) {

        counter++;

        moveCards();

    }

};


leftBtn.onclick = function () {

    if (counter > 0) {

        counter--;

        moveCards();

    }

};