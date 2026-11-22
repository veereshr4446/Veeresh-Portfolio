document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    this.reset();
});

/* added: console-greeting */
console.log('%cHi there! ðŸ‘‹ Thanks for checking out my code.', 'color:#58a6ff;font-size:14px;font-weight:bold;');
