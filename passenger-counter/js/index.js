// DOM traversing
const count_el = document.getElementById('count-el');
const increment_btn = document.getElementById('increment-btn');
const save_btn = document.getElementById('save-btn');
const save_el = document.getElementById('save-el');
// Initializations
let count = 0;
setElText(count_el, count);
// Event handlers
increment_btn.addEventListener('click', function () {
    count++;
    setElText(count_el, count);
});
save_btn.addEventListener('click', function () {
    const save_el_txt = save_el.textContent += (count + ' - ');
    setElText(save_el, save_el_txt);
    count = 0;
    setElText(count_el, count);
});
// Helpers
function setElText(el, count) {
    el.textContent = count;
}
