document.addEventListener('animationend', function(event) {
    if (event.animationName === 'burstUp') {
        window.location.href = 'nextpage.html'; // Redirect to the next page
    }
});
