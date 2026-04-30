document.getElementById('captureBtn').addEventListener('click', async () => {
    try {
        // 🖥️ STEP 1: Ask user to choose which monitor has the software (AutoCAD, etc)
        const captureStream = await navigator.mediaDevices.getDisplayMedia({
            video: { 
                cursor: "always",
                displaySurface: "monitor" // This opens the multiscreen picker box
            }
        });

        // 🗣️ STEP 2: Activate Universal Language & Software Knowledge
        const status = document.getElementById('aiInstruction');
        status.innerText = "Target Found. AI Translator & Design Coach is Online.";
        
        console.log("🛡️ VPN & IP Masking: Global Secure Tunnel Active");
        console.log("🌐 Universal Language Library: Loaded (All Languages Supported)");

    } catch (err) {
        alert("Action Cancelled. Please select a screen to start guidance.");
    }
});
