# Hybrid Dialogs

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/meteorhybrid/platform?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Cross-platform dialogs: alerts, confirms, and prompts (Cordova)

`meteor add hybrid:dialogs`

Currently works with: 
* [x] Native Browser Dialogs
* [x] Cordova Dialogs
* [x] Alertify Dialogs
* [ ] Mac OSX
* [ ] Create Meteor Specific Dialogs
* [ ] Finish Documentation

### alert 
Prompt the user with an alert.
```
Dialogs.alert(message, [callback], [title], [buttonText])
```

### confirm
Prompt the user with a confirmation box.
```
Dialogs.confirm("Would you like to reset your password?", function (res) {
  if (res === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}, "Forgot Password", ["Yes", "No"])
```

### prompt
Prompt the user with a text input box.
```
`Dialogs.prompt(message, [callback], [title], [buttonText], [defaultText])
````

=======================

### Web client options
Dialogs defaults to using native browser dialogs however can also be used with alertify.

####Using alertify
*Requires alertify lib/package*
`Dialogs.browserType = 'alertify'` 
