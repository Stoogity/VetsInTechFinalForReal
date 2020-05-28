
document.addEventListener('DOMContentLoaded', function () { 


//Creating variables from HTML elements
const portraitOneSlide = document.querySelector(".portOneSlides");
const portraitOneImages = document.querySelectorAll(".portOneSlides img");
const portraitTwoSlide = document.querySelector(".portTwoSlides");

const portOneNext = document.getElementsByClassName("portrait1-next");
const portOnePrev = document.getElementsByClassName("portrait1-prev");
const portTwoNext = document.getElementsByClassName("portrait2-next");
const portTwoPrev = document.getElementsByClassName("portrait2-prev");


// let maleHalfOrc = document.getElementById(maleHalfOrc);
// let femaleHalfOrc = document.getElementById(femaleHalfOrc);
// let maleTiefling = document.getElementById(maleTiefling);
// let femaleTiefling = document.getElementById(femaleTiefling);
// let maleGnome = document.getElementById(maleGnome);
// let femaleGnome = document.getElementById(femaleGnome);

//Counters for both portraits
let counter1 = 1;
let counter2 = 0;

const size = portraitOneImages[0].clientWidth;

portraitOneSlide.style.transform = "translateX(" + (-size * counter1) + "px)";

function moveRight() {
    if (counter1 >= 3) {
        counter1 === 3;
        return counter1;
    }
    portraitOneSlide.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    portraitOneSlide.style.transform = "translateX(" + (-size * counter1) + "px)";
}
//Button listener
portOneNext[0].addEventListener("click", moveRight);

portOnePrev[0].addEventListener("click",()=>{
    if (counter1 <= 1){
        counter1 === 1;
        return counter1;
    }
    counter1--;
    portraitOneSlide.style.transform = "translateX(" + (-size * counter1) + "px)";
});

portTwoNext[0].addEventListener("click",() => {
    
    if (counter2 >= 2) {
        counter2 === 2;
        return counter2;
    }
    portraitTwoSlide.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    portraitTwoSlide.style.transform = "translateX(" + (-size * counter2) + "px)";
});

portTwoPrev[0].addEventListener("click",() => {
    if (counter2 <= 0) {
        counter2 === 0;
        return counter2;
    }
    portraitTwoSlide.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    portraitTwoSlide.style.transform = "translateX(" + (-size * counter2) + "px)";
});


//Created variables for class pictures / stories
const rogueButton = document.getElementById("rogueButton");
const warButton = document.getElementById("warButton");
const mageButton = document.getElementById("mageButton");
let charStory = document.getElementById("charstory");
let defaultImg = document.getElementById("default");

    
//Change image/story functions
function selectRogue() {
    defaultImg.src="./portraits/Rogue.jpg";
    charStory.innerText = rogueStory;
    rogueAbilities();
}

function selectWar() {
    defaultImg.src="./portraits/Warrior.jpg";
    charStory.innerText = warStory;
    warAbilities();
}

function selectMage() {
    defaultImg.src="./portraits/Mage.jpg";
    charStory.innerText = mageStory;
    mageAbilites();
}

//Add button listeners
rogueButton.addEventListener("click", selectRogue);
mageButton.addEventListener("click", selectMage);
warButton.addEventListener("click", selectWar);

//Create variables for stat allocation

const totalPoints = document.querySelector("#availPoints");
let availPoints = Number(totalPoints.innerText);
let strengthBase = document.querySelector("#strengthStat");
let strength = Number(strengthBase.innerText);
let dexBase = document.getElementById("dexStat");
let dex = Number(dexBase.innerText);
let intBase = document.getElementById("intStat");
let int = Number(intBase.innerText);

//Create variables for stat buttons
const plusStrength = document.getElementById("plusStrength");
const minusStrength = document.getElementById("minusStrength");
const plusDex = document.getElementById("plusDex");
const minusDex = document.getElementById("minusDex");
const plusInt = document.getElementById("plusInt")
const minusInt = document.getElementById("minusInt");



//Add button listeners
plusStrength.addEventListener("click", addStrength);
minusStrength.addEventListener("click", subStrength);
plusDex.addEventListener("click", addDex);
minusDex.addEventListener("click", subDex);
plusInt.addEventListener("click", addInt);
minusInt.addEventListener("click", subInt);

//stat allocation functions
function addStrength() {
    if (availPoints > 0) {
        strength += 1;
        strengthBase.innerText = strength;
        availPoints -= 1;
        totalPoints.innerText = availPoints;
    }
}
function subStrength() {
    if (availPoints < 15 && strength > 0) {
        strength -= 1;
        strengthBase.innerText = strength;
        availPoints += 1;
        totalPoints.innerText = availPoints;
    }
}
function addDex() {
    if (availPoints > 0) {
        dex += 1;
        dexBase.innerText = dex;
        availPoints -= 1;
        totalPoints.innerText = availPoints;
    }
}
function subDex() {
    if (availPoints < 15 && dex > 0) {
        dex -= 1;
        dexBase.innerText = dex;
        availPoints += 1;
        totalPoints.innerText = availPoints;
    }
}
function addInt() {
    if (availPoints > 0) {
        int += 1;
        intBase.innerText = int;
        availPoints -= 1;
        totalPoints.innerText = availPoints;
    }
}
function subInt() {
    if (availPoints < 15 && int > 0) {
        int -= 1;
        intBase.innerText = int;
        availPoints += 1;
        totalPoints.innerText = availPoints;
    }
}

// //Access abilities text box
const abilitiesBox = document.getElementById("ability-select");
let abilityText = abilitiesBox.innerText;

//Rogue Abilities
function rogueAbilities () {
const meldIntoShadows = "Meld Into Shadows: Gain invisibility. Your next attack is guaranteed to critically strike.";
const backStab = "Backstab: Stab your target from behind (must have dagger equipped) for 15 + " + (dex * .5) + " damage.";
const cheapShot = "Cheap Shot: A fight is no time for honor. Honor gets you killed. Throw dust into your opponent's eyes and quickly take them down, stunning them.";
abilityText = meldIntoShadows + "\n" + backStab + "\n" + cheapShot;
abilitiesBox.innerText = abilityText;
}

function warAbilities () {
    const numb = "Numb the Pain: Years of training have allowed you to shrug off injury for a period of time. Ignore all incoming damage for two turns.";
    const cleave = "Cleave: Sweep your weapon in a horizontal arc, hitting all enemies in front of you for 5 + " + (strength * .03) + " damage.";
    const devastate = "Devastate: Bring your weapon down hard on a single enemy, dealing 10 + " + (strength * 2) + " damage.";
    abilityText = numb + "\n" + cleave + "\n" + devastate;
    abilitiesBox.innerText = abilityText;
}

function mageAbilites () {
    const rage = "Rage: Uncontrollable rage bursts from your hands in the form of flames, searing your enemy for 5 + " + (int) + " damage per turn.";
    const calm = "Calm: Calm your emotions, allowing you to channel a frozen prison around your enemy, so that they too may be still. Stun your enemy.";
    const envy = "Envy: Wishing that you too had an ally, bend your opponent's will and force them to fight for you for 2 turns.";
    abilityText = rage + "\n" + calm + "\n" + envy;
    abilitiesBox.innerText = abilityText;
}

const rogueStory = "You were born to nobility, but that life never interested you. From a young age, you found yourself evading your handlers and wandering the streets, pretending to be anything but noble. You learned to sneak, steal, and more importantly how to survive without having everything provided to you. Of course you would return home every day and be scolded by your parents, but that never much mattered to you either. You snuck out one night to go for a stroll, but when you returned home you found the manor ablaze. Apart from the roaring inferno, not a single sound came from inside. A figure stumbled out of the smoke and haze and you recognized it as your father. He was bleeding from a wound to his side, and you ran to him. He grabbed you weakly and said, 'One of the other houses moved against us. Everyone else is dead and I am dying. They will be hunting for you too. Leave quickly before they find you.' He let out a final gasp and fell to the ground. You did as instructed, but you will find who did this.";

const warStory = "Your people didn't ask for much. They produced the best warriors for the army and in return were left alone to worship the old gods of the forest. Your burial sites were sacred, and while the city tried to expand ever outward, your lands were left alone. This was the agreement that had been reached centuries ago and up until this night had been followed. You are uncertain who is out there in the graveyard destroying the old tombs, but they are about to regret their actions. You heft your two axes and hurry off into the night.";

const mageStory = "You open your eyes. The last thing you remember was watching helplessly as the hooded figure sealed the box shut with you inside it. The darkness of your would-be tomb is suffocating. Fear grips you and quickly turns to anger. You press upward on the lid with all your might, and you feel a surge of energy explode out of your hands and into the lid. The lid first splinters, and then bursts off of the box. The light, although dim, is blindingly bright to your eyes after the darkness of the box. As your eyes begin to adjust, you look at your hands - nothing but bone. Fear wells up within you as you examine the rest of your body and see that it too, is bone. Again you feel a surge of energy burst from you and sear the box, causing it to erupt into flames, flames that do not burn you. You don't remember having these abilities. What happened to you? You intend to find out.";


})