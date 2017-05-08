# Template Repository for Cross-Platform Development of Mobile Applications

Dear all!

Please use this project as a template for your own projects. At any time but for sure until the deadline all project artefacts must be added or linked to this project.

There are no restrictions for the structure of your project. The only requirements are, that this README.md contains links to all your project artefacts and that documents are living in `documents/`.

All the best

Matthias

<highlight>`remove all content before the following headline!`</highlight>

# Project-Name

Description: This is a short description on what your project is about. Goals/ target users. As soon as it is available ONE representative screenshot.

## Technology

Brief description (perhaps bulletpoints) on the used technology stack.

## Team Setup

Bulletpoint list of team members (if you fly the web in stealth mode of course anonymized). As the project moves on the list should give a coarse grained overview on who was responsible for what.

# Artefacts

This section contains links to all relevant project artefacts. For the last two bullets chose either to submit a video or a poster.

* [Project Proposal](documents/proposal.pdf)
* [UI Sketches](documents/sketch-presentation.pdf), [MyBalsamiq](https://www.mybalsamiq.com)
* [UI Mocks](documents/mock-presentation.pdf), [Ionic Creator](http://ionic.io/products/creator)
* [Peer Talk Slides](documents/peer-talk.pdf)
* [Final Project Presentation](documents/final-presentation.pdf)
* Code is living in `src`
* [Project Video](https://www.youtube.com/embed/gGOXMWGVwDg)
* [Project Poster](documents/poster.pdf)

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
$ ionic platform add ios
$ ionic platform add android
```

To build execute following commands:

```bash
$ ionic build ios
$ ionic build android
```

To emulate on a platform run following commands:

```bash
$ ionic emulate ios
$ ionic emulate android
```

To start the web-view, run

```bash
$ ionic serve
```

To get ios and android in comparison in the webview, run

```bash
$ ionic serve --lab
```

## Install app in iOS

To install the app on iOS, switch to the folder /platforms/ios and open the xcode-Project.

## Issues
If Android is not installed:

```bash
npm install android
```

## Ressources

http://ionicframework.com/docs/cli/ -- CLI Beschreibung.
http://ionicframework.com/docs/components/ -- Components
