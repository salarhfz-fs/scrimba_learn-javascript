// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

const purchase_btn = document.getElementById('purchase');
const error_el = document.getElementById('error');

purchase_btn.addEventListener('click', function () {
    error_el.textContent = 'Something went wrong, please try again';
});
