function generateLadder() {
    const choices = Array(42).fill('일반');
    const reserveChoices = Array(4).fill('리저브');
    const ladder = choices.concat(reserveChoices);

    for (let i = ladder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ladder[i], ladder[j]] = [ladder[j], ladder[i]];
    }

    const resultDiv = document.getElementById('ladder-results');
    resultDiv.innerHTML = '';

    ladder.forEach((choice, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}: ${choice}`;
        resultDiv.appendChild(p);
    });
}
