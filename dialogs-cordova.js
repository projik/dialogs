Dialogs.alert = function(message, callback, title, buttonName) {
  navigator.notification.alert(message, callback, title, buttonName)
};

Dialogs.confirm = function(message, callback, title, buttonName) {
  navigator.notification.confirm(message, callback, title, buttonName)
};

Dialogs.prompt = function(message, callback, title, buttonName, defaultText) {
  navigator.notification.prompt(message, callback, title, buttonName, defaultText)
};