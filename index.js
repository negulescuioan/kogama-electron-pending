const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    
    // l'environnement doit creer une fenetre lorsqu'il est mentionne.
    const myWindow = new BrowserWindow({
        width: 1200,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // chargement de la page web x.
    myWindow.loadURL("https://www.kogama.com/");
})