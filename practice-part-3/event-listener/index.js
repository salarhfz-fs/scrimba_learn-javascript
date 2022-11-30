let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const show_score_btn = document.getElementById('show-score-btn');
show_score_btn.addEventListener('click', function () {
    console.log(`${data[0].player}'s score: ${data[0].score}`);
});
