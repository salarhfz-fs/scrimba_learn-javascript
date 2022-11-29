let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let first_fighter_idx = getRandomIntegerInRange(0, fighters.length - 1);
    let second_fighter_idx = getRandomIntegerInRange(0, fighters.length - 2);
    let second_fighter_pool = fighters.filter((_, idx) => idx !== first_fighter_idx);
    stageEl.textContent = fighters[first_fighter_idx] + ' vs ' + second_fighter_pool[second_fighter_idx];
})

function getRandomIntegerInRange(min, max) {
    if ([min, max].every(num => Number.isInteger(num)) && min <= max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    return null;
}