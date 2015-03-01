# Meteor Dialogs

This package wraps dialogs on different platforms and libs to allow you to use one set of functions.

`meteor add hybrid:dialogs`

Currently works with: 
* [x] Native Browser Dialogs
* [x] Cordova Dialogs
* [x] Alertify Dialogs
* [ ] Mac OSX

### Using alertify

`Dialogs.browserType= 'alertify'` 

*This is temporary*

### Dialogs.alert(message, [callback], [title], [buttonText])

Prompt the user with an alert.

### Dialogs.confirm(message, [callback], [title], [buttonText])

Prompt the user with a confirmation box.

### Dialogs.prompt(message, [callback], [title], [buttonText], [defaultText])

Prompt the user with a text input box.

*TODO: Make these docs better*
*TODO: Create Meteor specific dialogs*
