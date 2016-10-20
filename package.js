Package.describe({
  name: "supaseca:dialogs",
  summary: "Cross-platform dialogs: alerts, confirms, and prompts (Cordova).",
  version: "1.0.4",
  git: "https://github.com/projik/dialogs"
});

Cordova.depends({
  "org.apache.cordova.dialogs":"1.3.0"
});

Package.onUse(function(api) {
  api.export('Dialogs');
  api.versionsFrom('METEOR@1.3');

  api.addFiles('dialogs.js', 'client');
  api.addFiles('dialogs-browser.js', ['web.browser']);
  api.addFiles('dialogs-cordova.js', ['web.cordova']);
});
