const home_team = {
    score: 0,
    score_el: document.getElementById('home-score'),
};
const guest_team = {
    score: 0,
    score_el: document.getElementById('guest-score'),
};

function updateScoreboard() {
    home_team.score_el.textContent = home_team.score;
    guest_team.score_el.textContent = guest_team.score;
    home_team.score_el.classList.remove('winner');
    guest_team.score_el.classList.remove('winner');
    if (home_team.score > guest_team.score) {
        home_team.score_el.classList.add('winner');
    } else if (home_team.score < guest_team.score) {
        guest_team.score_el.classList.add('winner');
    }
}

function updateScore(value, team) {
    switch (team) {
        case 'home':
            home_team.score += value;
            updateScoreboard();
            break;
        case 'guest':
            guest_team.score += value;
            updateScoreboard();
            break;
        default:
            break;
    }
}

updateScoreboard();
