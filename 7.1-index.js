let moveInterval = null;

// Start moving image function
function startMoving() {
    // Identifies desired elements
    const meme = document.getElementById('meme');
    let x = 0;
    let y = 0;
    const speed = 5;

    // Code that allows the properties to change so the image can move along the screen
    moveInterval = setInterval(() => {
        x += speed;
        y += speed;
        meme.style.left = x + 'px';
        meme.style.top = y + 'px';

        // If property that resets position if image moves of screen
        if (x > window.innerWidth || y > window.innerHeight) {
            x = 0;
            y = 0;
        }
    }, 50);

    // Disables start button and enables stop button
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
}

// Stop moving image function
function stopMoving() {
    clearInterval(moveInterval);
    // Enables start button and disables stop button
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
}