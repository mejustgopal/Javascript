//Script for random color and random background in 5 boxes


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


for (let i = 1; i <= 5; i++) {
    const box = document.getElementById(`box${i}`);
    box.style.color = getRandomColor();
    box.style.background = getRandomColor();
    box.innerHTML = `Box ${i}`;
}
