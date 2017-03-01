const electron = require('electron')
const storage = require('electron-json-storage');

const {
    app,
    BrowserWindow
} = electron

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})
