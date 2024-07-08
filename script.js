document.addEventListener('DOMContentLoaded', () => {
    generateLadder();
});

function generateLadder() {
    const numChoices = 46;
    const ladderContainer = document.getElementById('ladder-container');
    ladderContainer.innerHTML = '';

    const choices = Array(42).fill('일반').concat(Array(4).fill('리저브'));
    shuffle(choices);

    for (let i = 0; i < numChoices; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        column.dataset.result = choices[i];

        for (let j = 0; j < 10; j++) {
            const step = document.createElement('div');
            step.className = 'step';

            if (Math.random() > 0.7) {
                const horizontal = document.createElement('div');
                horizontal.className = 'horizontal';
                step.appendChild(horizontal);
            }

            column.appendChild(step);
        }

        column.addEventListener('click', () => {
            const result = column.dataset.result;
            document.getElementById('result').textContent = `결과: ${result}`;
        });

        ladderContainer.appendChild(column);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
