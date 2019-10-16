import './scss/main.scss';

document.getElementById('bouton').addEventListener('click', function() {
    setInterval(function() {
        window.navigator.vibrate(300);
    }, 500);
});
