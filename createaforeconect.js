let lastTimestamp = Date.now();
let clickLink = true;
let isRunning = false;
let refreshInterval;

function checkRefresh() {
    const currentTimestamp = Date.now();

    if (currentTimestamp - lastTimestamp > 10000 && isRunning) {
        // Page refreshed or reloaded
        lastTimestamp = currentTimestamp;

        if (clickLink) {
            const linkElement = document.querySelector('.qlink.load_afo');
            if (linkElement) {
                linkElement.click();
                clickLink = false;

                // Wait for 2.5 seconds before clicking the next element
                setTimeout(() => {
                    const ghButtonElement = document.querySelector('.gh_button.gh_code');
                    if (ghButtonElement) {
                        ghButtonElement.click();

                        // Wait for another 2.5 seconds before clicking the last element
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
        // Start the script
        localStorage.setItem('isRunning', 'true');
        refreshInterval = setInterval(() => {
            checkRefresh();
        }, 1000);
    } else {
        // Stop the script
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
    lastTimestamp = Date.now(); // Reset timestamp on page unload
});

// Check localStorage for the previous state
const storedState = localStorage.getItem('isRunning');
if (storedState === 'true') {
    toggleScript();
}

// Create a button to control the script
function createControlButton() {
    const controlButton = document.createElement('button');
    controlButton.id = 'toggleScriptButton';
    controlButton.textContent = isRunning ? 'Stop' : 'Start';
    controlButton.className = 'btn_small_gold'; // Added class 'btn_small_gold'
    controlButton.style.position = 'fixed';
    controlButton.style.top = '10px';
    controlButton.style.right = '10px';
    controlButton.addEventListener('click', () => {
        toggleScript();
        checkIfRefreshed(); // Check immediately after clicking the button
    });
    document.body.appendChild(controlButton);
}

// Delay creating the button to ensure it's added after the page has loaded
setTimeout(createControlButton, 2000);

