console.log("Content script loaded for google docs");

document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
    switch (event.key) {
        case 'h':
            simulateKey('ArrowLeft', 1);
            break;
        case 'l':
            simulateKey('ArrowRight', 1);
            break;
        case 'j':
            simulateKey('ArrowDown', 1);
            break;
        case 'k':
            simulateKey('ArrowUp', 1);
            break;
        default:
            break;
    }
});

function simulateKey(key, count) {
    const event = new KeyboardEvent('keydown', {
        key: key,
        code: key,
        which: key.charCodeAt(0),
        bubbles: true,
        cancelable: true
    });
    for (let i = 1; i < count; i++) {
        document.dispatchEvent(event);
    }
    console.log(`Simulated key: ${key} (${count} times)`);
}