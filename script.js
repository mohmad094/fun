document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const message = document.getElementById('message');
    let h1 = document.querySelector("h1");

    yesButton.addEventListener('click', () => {
        message.classList.remove('hidden');
        h1.classList.add("hidden");
        message.textContent = 'Happy Birthday Sabiha!!!!🥳🥳🥳    May GOD Bless You😍😍😍';
    });

    noButton.addEventListener('click', () => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        const maxLeft = containerRect.width - buttonRect.width;
        const maxTop = containerRect.height - buttonRect.height;

        const newLeft = Math.random() * maxLeft;
        const newTop = Math.random() * maxTop;

        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});
