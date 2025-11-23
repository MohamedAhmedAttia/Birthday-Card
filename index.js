// index.js

    // Get the music and the cat background elements
    const bgMusic = document.getElementById("bgMusic");
    const catBackground = document.querySelector(".cat-background");

    // Automatic confetti on page load
    window.onload = function () {
        confetti({
            particleCount: 3000,
            spread: 120000,
            origin: { y: 1 } // تطلع من تحت
        });
    };


    document.getElementById("playBtn").addEventListener("click", function() {
        // 1. Play the music
        bgMusic.play();

        // 2. Start the cat background animation/fade in
        catBackground.classList.add("active");
    });
    
    // Listen for the music to end
    bgMusic.addEventListener('ended', function() {
        // 3. Stop the cat background animation/fade out smoothly
        catBackground.classList.remove("active");
    });

    document.getElementById("confettiBtn").addEventListener("click", function() {
        confetti({
            particleCount: 3000,
            spread: 120000,
            origin: { y: 1 }
        });
    });