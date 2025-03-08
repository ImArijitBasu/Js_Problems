let messageBox = document.querySelector("div[contenteditable='true'][data-tab='10']");
let isPaused = false; // Track if paused

if (messageBox) {
    let count = 0;
    let interval = setInterval(() => {
        if (isPaused) return; // Pause if needed

        if (count < 1000) {
            messageBox.focus();
            document.execCommand("insertText", false, "Sorry 😔");
            messageBox.dispatchEvent(new Event("input", { bubbles: true }));

            let sendButton = document.querySelector("button span[data-icon='send']") || 
                             document.querySelector("button[aria-label='Send']");
            if (sendButton) {
                sendButton.click();
                count++;
                console.log(`✅ Sent: ${count}`);
            } else {
                console.log("❌ Send button not found. Trying again...");
            }
        } else {
            clearInterval(interval);
            console.log("✅ Done! Sent 1000 messages.");
        }
    }, 500);
}

// Commands to control:
function pauseSending() { isPaused = true; console.log("⏸ Paused!"); }
function resumeSending() { isPaused = false; console.log("▶ Resumed!"); }
function stopSending() { clearInterval(interval); console.log("⏹ Stopped!"); }
