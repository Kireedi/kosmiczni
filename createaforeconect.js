let lastTimestamp = Date.now();
let isRunning = false;
let refreshInterval;

function checkRefresh() {
    const currentTimestamp = Date.now();

    if (currentTimestamp - lastTimestamp > 30000 && isRunning) {
        // Page refreshed or reloaded
        lastTimestamp = currentTimestamp;

        const linkElement = document.querySelector('.qlink.load_afo');
        if (linkElement) {
            linkElement.click();

            setTimeout(() => {
                const ghButtonElement = document.querySelector('.gh_button.gh_code');
                if (ghButtonElement) {
                    ghButtonElement.click();

                    setTimeout(() => {
                        const codeButtonElement = document.querySelector('.code_button.code_code');
                        if (codeButtonElement) {
                            codeButtonElement.click();
                        }
                    }, 2500);
                }
            }, 2500);
        }
    }
}

function toggleScript() {
    isRunning = !isRunning;

    if (isRunning) {
        localStorage.setItem('isRunning', 'true');
        refreshInterval = setInterval(() => {
            checkRefresh();
        }, 1000);
    } else {
        localStorage.setItem('isRunning', 'false');
        clearInterval(refreshInterval);
    }

    updateButtonText();
}

function updateButtonText() {
    const controlButton = document.getElementById('toggleScriptButton');
    if (controlButton) {
        controlButton.textContent = isRunning ? 'Off' : 'On';
    }
}

function checkIfRefreshed() {
    const storedState = localStorage.getItem('isRunning');
    if (storedState === 'true') {
        // Start the script automatically if it was running before the refresh
        isRunning = true;
    }
}

window.addEventListener('beforeunload', () => {
    lastTimestamp = Date.now(); 
});

function createControlButton() {
    const controlButton = document.createElement('button');
    controlButton.id = 'toggleScriptButton';
    controlButton.textContent = isRunning ? 'Off' : 'On';
    controlButton.className = 'btn_small_gold';
    controlButton.style.position = 'absolute';
    controlButton.style.top = '30px';
    controlButton.style.right = '10px';
    controlButton.addEventListener('click', () => {
        toggleScript();
        checkIfRefreshed(); 
    });
    document.body.appendChild(controlButton);
}

setTimeout(createControlButton, 2000);

