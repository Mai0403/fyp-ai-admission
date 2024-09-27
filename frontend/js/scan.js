
document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressElement = document.getElementById("progress");

    // Increment progress every 100ms (100 steps in 10 seconds)
    const interval = setInterval(() => {
        progress += 1;
        progressElement.textContent = progress;

        if (progress >= 100) {
            clearInterval(interval);
            // After 5 seconds, redirect to another page
            window.location.href = "result.html"; 
        }
    }, 50); // 50ms for each percentage increment
});