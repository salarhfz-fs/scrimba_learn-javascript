// DOM queries
const message_el = document.getElementById('message-el');
const cards_el = document.getElementById('cards-el');
const sum_el = document.getElementById('sum-el');
const start_game_btn = document.getElementById('start-game-btn');
const new_card_btn = document.getElementById('new-card-btn');
new_card_btn.classList.add('disabled');
// Business
const BLACKJACK = 21;
let cards = [];
let sum = 0;
let has_blackjack = false, is_alive = false;
let message = '';

function startGame() {
    has_blackjack = false;
    is_alive = true;
    new_card_btn.classList.remove('disabled');
    cards = [getRandomCard(), getRandomCard()];
    sum = cards.reduce((prev, next) => prev + next, 0)
    playOneRound()
}

function playOneRound() {
    sum_el.textContent = 'Sum: ' + sum;
    if (sum < BLACKJACK) {
        message = 'Do you want to draw a new card?';
    } else if (sum === BLACKJACK) {
        message = 'You\'ve got Blackjack!';
        has_blackjack = true;
    } else {
        message = 'You\'re out of the game!';
        is_alive = false;
    }
    if (!is_alive || has_blackjack) {
        new_card_btn.classList.add('disabled');
    }
    message_el.textContent = message;
    cards_el.textContent = 'Cards: ' + cards.join(' ');
}

function drawNewCard() {
    if (!is_alive || has_blackjack) return;
    const new_card = getRandomCard();
    cards.push(new_card);
    sum += new_card;
    playOneRound();
}

start_game_btn.addEventListener('click', startGame);
new_card_btn.addEventListener('click', drawNewCard);

// Helpers
function createRandomIntegerInRange(min, max) {
    if ([min, max].every(num => Number.isInteger(num)) && min <= max) {
        return Math.floor((Math.random() * (max - min + 1))) + min;
    }
    return null;
}
function getRandomCard() {
    const random_num = createRandomIntegerInRange(1, 13);
    if (random_num > 10) return 10;
    if (random_num === 1) return 11;
    return random_num;
}