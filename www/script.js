document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('openGoogle');
    
    button.addEventListener('click', function() {
        window.open('https://google.com', '_blank');
    });
});
