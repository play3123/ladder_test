document.addEventListener('DOMContentLoaded', () => {
    generateLadder();
});

function generateLadder() {
    const numParticipants = document.getElementById('numParticipants').value;
    const ladderContainer = document.getElementById('ladder-container');
    ladderContainer.innerHTML = '';
    const choices = Array(parseInt(numParticipants) - 4).fill('일반').concat(Array(4).fill('리저브'));
    shuffle(choices);

    const steps = [];
    for (let i = 0; i < numParticipants; i++) {
        steps[i] = [];
        for (let j = 0; j < 10; j++) {
            steps[i][j] = Math.random() > 0.7 && i < numParticipants - 1;
        }
    }

    for (let i = 0; i < numParticipants; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        column.dataset.index = i;

        for (let j = 0; j < 10; j++) {
            const step = document.createElement('div');
            step.className = 'step';

            if (steps[i][j]) {
                const horizontal = document.createElement('div');
                horizontal.className = 'horizontal';
                step.appendChild(horizontal);
            }

            column.appendChild(step);
        }

        column.addEventListener('click', () => {
            const result = tracePath(i, steps, choices);
            document.getElementById('result').textContent = `결과: ${result}`;
        });

        ladderContainer.appendChild(column);
    }
}

function tracePath(startIndex, steps, choices) {
    let currentIndex = startIndex;
    for (let j = 0; j < steps[0].length; j++) {
        if (currentIndex < steps.length - 1 && steps[currentIndex][j]) {
            currentIndex++;
        } else if (currentIndex > 0 && steps[currentIndex - 1][j]) {
            currentIndex--;
        }
    }
    return choices[currentIndex];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
