const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Variable to store the deferred prompt

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Store the event for later use
    deferredPrompt = event;
    // Show the install button (assuming buttonInstall is initially hidden)
    buttonInstall.style.display = 'block';
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    // Reset the deferredPrompt variable
    deferredPrompt = null;
    // Hide the install button regardless of the user's choice
    buttonInstall.style.display = 'none';
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {// Perform actions after the app has been installed
    console.log('App was installed successfully!');});
