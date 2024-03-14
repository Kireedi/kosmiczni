let lastTimestamp = Date.now();
let clickLink = true;
let isRunning = false;
let refreshInterval;

function checkRefresh() {
    const currentTimestamp = Date.now();

    if (currentTimestamp - lastTimestamp > 20000 && isRunning) {
       // Page refreshed or reloaded
        lastTimestamp = currentTimestamp;

        if (clickLink) {
            const linkElement = document.querySelector('.qlink.load_afo');
            if (linkElement) {
                linkElement.click();
                clickLink = false;

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
        controlButton.textContent = isRunning ? 'Stop' : 'Start';
    }
}

function checkIfRefreshed() {
    if (isRunning) {
        const currentTimestamp = Date.now();
        if (currentTimestamp - lastTimestamp > 1000) {
            console.log("Strona została odświeżona lub przeładowana!");
            lastTimestamp = currentTimestamp;
        }
    }
}

window.addEventListener('beforeunload', () => {
    lastTimestamp = Date.now(); 
});

const storedState = localStorage.getItem('isRunning');
if (storedState === 'true') {
    toggleScript();
}
function createControlButton() {
    const controlButton = document.createElement('button');
    controlButton.id = 'toggleScriptButton';
    controlButton.textContent = isRunning ? 'Stop' : 'Start';
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

