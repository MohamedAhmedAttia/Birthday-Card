
    // Automatic confetti on page load
    window.onload = function () {
        confetti({
            particleCount: 3000,
            spread: 120000,
            origin: { y: 1 } // تطلع من تحت
        });
    };


    document.getElementById("playBtn").addEventListener("click", function() {
        document.getElementById("bgMusic").play();
    });

    document.getElementById("confettiBtn").addEventListener("click", function() {
        confetti({
            particleCount: 3000,
            spread: 120000,
            origin: { y: 1 }
        });
    });
