// Modern JavaScript for Matrix Project

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    console.log('Matrix Project initialized');

    // Initialize app
    init();
    initMatrixRain();
});

// Initialize function
function init() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Log ready state
    console.log('Application ready');
}

// Matrix Rain Animation
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to use in the rain
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array to track the y position of each column
    const drops = Array(Math.floor(columns)).fill(1);

    // Draw function
    function draw() {
        // Create fade effect by drawing semi-transparent black rectangle
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text style
        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px monospace`;

        // Loop through drops
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = characters.charAt(Math.floor(Math.random() * characters.length));

            // Draw character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop to top randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move drop down
            drops[i]++;
        }
    }

    // Animation loop
    setInterval(draw, 33);

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Example utility function
function toggleTheme() {
    // Placeholder for future theme toggle functionality
    console.log('Theme toggle placeholder');
}
