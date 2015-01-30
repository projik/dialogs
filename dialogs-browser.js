/*
 * Alert
 */
Dialogs.alert = function(message, callback) {

  // Alertify
  if (this.browserType == "alertify")
    alertify.alert(message)

  // Native
  else 
    window.alert(message);

  if (callback && typeof callback == 'function')
    callback();
};

/*
 * Confirm
 */
Dialogs.confirm = function(message, callback) {

  // Alertify
  if (this.browserType == "alertify") {
    alertify.confirm(message, function (e) {
      if (e)
        callback(1);
      else
        callback(2);
    });
  }

  // Native
  else { 
    if (callback && typeof callback == 'function')
      callback( window.confirm(message)? 1 : 2 );
    else 
      window.confirm(message)? 1 : 2;
  }

};

/*
 * Prompt
 */
Dialogs.prompt = function(message, callback, title, buttonName, defaultText) {

  // Alertify
  if (this.browserType == "alertify") {
    alertify.prompt(message, function (e, str) {
      if (e)
        callback(str)
    }, defaultText);
  }

  // Native
  else { 
    if (callback && typeof callback == 'function')
      callback( window.prompt(message, defaultText) );
  }

};