# OMEGA

## About

“Omega” is a sound installation exploring the relationship between chance and audio visuals. The work invites the user / participant to interact with the provided sounds and combine them in any way they want. The result is a composition generated by the user with the visuals being shaped by the frequencies of the composition. The work was written to be published under my moniker “Prayer”.

The installation was created to explore new ways of how music can be made, and seeks to provide a platform for open ended composition, where anyone can create their own interpretation of a work given an underlying foundation for creation. The work largely explores “Aleatoric” music, dating back to the 15th century, but popularised by John Cage in the 1950’s.

## Live Website

https://prayer-omega.herokuapp.com/

## Tech Stack

<img alt="React logo" src="./src/assets/images/react-logo.png" height="125" width="125"> <img alt="Express logo" src="./src/assets/images/express.png" height="125" width="250"> <img alt="Axios logo" src="./src/assets/images/axios.png" height="125" width="200">

<img alt="HTML logo" src="./src/assets/images/html.png" height="125" width="125"> <img alt="Javascript logo" src="./src/assets/images/javascript.png" height="125" width="125"> <img alt="NPM logo" src="./src/assets/images/npm.png" height="125" width="125"> <img alt="SCSS logo" src="./src/assets/images/scss.png" height="125" width="125"> <img alt="Three.js logo" src="./src/assets/images/threejs.png" height="125" width="200">

## Next Steps

There is plenty of scope for further progression in this project. My journey in to three.js and web audio has only just begain. I plan on building more advanced animations and implementing timing / tempo methods for the audio.

## Available Scripts

First install the dependancies:

### `npm i`

Then:

### `npm start`

Runs project in development mode on http://localhost:3000

(Please note the server for this project must be started first).
https://github.com/TD142/thomas-daley-capstone-server

API calls made to http://localhost:8080

# Interacting with the App.

## Choosing an Animation

In the top right corner directly above the canvas there is an option drop down where you can choose from three animations.

## Choosing an Animation Colour

In the top left corner directly above the canvas there is a drop down where you can choose the current animation colour.

## Interacting with the Music

Click on a sampler pad to trigger a sound clip. Once actioned the selected pad will turn blue. to stop the track, click again, the pad will flash a red border and the audio will then fade out. Once the sound clip audio has stopped, the pad will return to its default white color.

Fade in or out the individual sound clips with the blue faders placed beneath the pads.

The individual tracks have been designed in a way to fit with each other no matter the time they are triggered. Experiment and see what you can come up with!

Click the drop down beneath the pads to change sound bank.

## Audio Visualiser

Each animation has a default background animation. Once the music is started you will see an animation reacting to the frequencies of the audio.

## Additional Notes

Sound will only work on ios if not on silent mode. This is due to ios configuration when playing web audio sounds.
