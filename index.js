const electron = require('electron');
const app = electron.app; 
const BrowserWindow = electron.BrowserWindow;
electron.Menu.setApplicationMenu(null)

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1063,
    height: 883,
	webPreferences: {
		nodeIntegration: true,
		contextIsolation: false
	},
	icon: 'icon.png'
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});