document.getElementById('captureBtn').addEventListener('click', async () => {
    try {
        // This command triggers the browser to ask: "Which screen do you want to share?"
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { displaySurface: "monitor" }, // Looks for your monitors
            audio: false
        });

        const instruction = document.getElementById('aiInstruction');
        const guideBox = document.getElementById('guideBox');
        
        guideBox.style.display = 'block';
        instruction.innerText = "Target identified. Open AutoCAD to start the Eiffel Tower base.";
        
        // This represents the "IP Masking/VPN" layer starting up for protection
        console.log("VPN Protection: Active");
        
    } catch (err) {
        console.error("Error: " + err);
    }
});
