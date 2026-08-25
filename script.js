function newMotivation() {
    const messages = [
        "You are doing better than you think! ✨",
        "Small steps still count. 🌸",
        "Be proud of yourself today! 💕",
        "You don't have to be perfect. 🌷",
        "Take a breath. You've got this! ☀️"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);

    document.getElementById("motivation").textContent = messages[randomIndex];
}


function newTip() {
    const tips = [
        "Don't forget sunscreen every morning! ☀️",
        "Be gentle while cleansing your face. 🫧",
        "Moisturizer helps keep your skin comfortable. 💧",
        "Keep your skincare routine simple and consistent. 🌸",
        "Give your skin some care, but don't overdo it! 💕"
    ];

    const randomIndex = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").textContent = tips[randomIndex];
}