Package.describe({
  name: "hybrid:dialogs",
  summary: "Cross-platform dialogs: alerts, confirms, and prompts (Cordova).",
  version: "1.0.3",
  git: "https://github.com/meteorhybrid/dialogs"
});

Cordova.depends({
  "org.apache.cordova.dialogs":"0.3.0"
});

Package.onUse(function(api) {
  api.export('Dialogs');
  api.versionsFrom('METEOR@1.0');

  api.addFiles('dialogs.js', 'client');
  api.addFiles('dialogs-browser.js', ['web.browser']);
  api.addFiles('dialogs-cordova.js', ['web.cordova']);
});
