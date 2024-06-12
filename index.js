window.onload = function () {
    document.getElementById('loginCard').style.display = 'block';
};

function hideLoginCard() {
    document.getElementById('loginCard').style.display = 'none';
}

function openCard(option) {
    document.getElementById('card').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('card-content').textContent = 'Information about ' + option;
}

function closeCard() {
    document.getElementById('card').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}