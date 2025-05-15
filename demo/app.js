// Select all images in the gallery
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        let madeUpProb = Math.floor(Math.random() * 50) + 51;
        document.querySelector('.log').innerHTML = `GPT-8o predicts that this is the logo of <b>${this.alt}</b> with probability ${madeUpProb}%.`;
    });
});
