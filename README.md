# Hybrid Dialogs

> Cross-platform dialogs: alerts, confirms, and prompts (Cordova)

## Installation 
```
meteor add supaseca:dialogs
```

## Currently works with: 
* [x] Native Browser Dialogs
* [x] Cordova Dialogs
* [x] Alertify Dialogs
* [ ] Mac OSX
* [ ] Create Meteor Specific Dialogs
* [ ] Finish Documentation

## API 
#### alert 
Prompt the user with an alert.
* message
* callback
* title
* buttons
```
Dialogs.alert("Please enter a valid email address.", null, "Invalid Email", "OK");
```

#### confirm
Prompt the user with a confirmation box.
* message
* callback
* title
* buttons
```
Dialogs.confirm("Would you like to reset your password?", function (res) {
  if (res === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}, "Forgot Password", ["Yes", "No"]);
```

#### prompt
Prompt the user with a text input box.
* message
* callback
* title
* buttons
* default text
```
Dialogs.prompt("Please enter your email address", function (res) {
  console.log(res);
}, "Newsletter", "OK", "")
````

=======================

### Web client options
Dialogs defaults to using native browser dialogs however can also be used with alertify.

#### Using alertify
*Requires alertify lib/package*
`Dialogs.browserType = 'alertify'` 
