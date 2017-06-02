# ShareBook

Description: This is a short description on what your project is about. Goals/ target users. As soon as it is available ONE representative screenshot.

## Technology

Used technology stack:

* [Ionic 3](https://ionicframework.com/) (which includes the following)
* [Angular](https://angularjs.org/)
* [Cordova](https://cordova.apache.org/)
* [Gulp](http://gulpjs.com/)

## Team Setup

The project Team consists of following members:

* [Daniel Brunner](https://github.com/danjelous)
* [Daniel Huber](https://github.com/danielhuber3008)
* [Michael Troger](https://github.com/michaeltroger)

## Using this project

After checkout of the project run

```bash
$ npm install
$ bower install
```

to install third party dependencies.
If cordova-specific errors occur, install cordova and ionic separately and globally on your machine:

```bash
$ sudo npm install -g cordova
$ sudo npm install -g ionic
```

Then add specific platforms:

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

To build execute following commands:

```bash
$ ionic cordova build ios
$ ionic cordova build android
```

To emulate on a platform run following commands:

```bash
$ ionic cordova emulate ios
$ ionic cordova emulate android
```

To start the web-view, run

```bash
$ ionic serve
```

To get ios and android in comparison in the webview run

```bash
$ ionic serve -l
```

Be sure to tick the boxes in the right upper corner under `Platforms`!

### Install app on iOS

To install the app on iOS, switch to the folder `/platforms/ios` and open the xcode-Project.

### Install app on android

Switch to the folder `/platforms/android` and grab the `.apk`.

## Artefacts

This section contains links to all relevant project artefacts. For the last two bullets chose either to submit a video or a poster.

* [Project Proposal](documents/XPD_Proposal.pdf)
* [UI Sketches](documents/presentations/ShareBook_myBalsamiq_Mockups.pdf), [MyBalsamiq](https://www.mybalsamiq.com)
* [UI Mocks](documents/mock-presentation.pdf), [Ionic Creator](http://ionic.io/products/creator)
* Code is living in `src`
* [Project Poster](documents/poster.pdf)
* [Ionic CLI Description](http://ionicframework.com/docs/cli/)
* [Ionic Components](http://ionicframework.com/docs/components/)
