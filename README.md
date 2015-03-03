# Hybrid Dialogs

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
Dialogs.confirm(message, [callback], [title], [buttonText])
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
