
# React Native Mobile Chat App

## What is the purpose of this app?
This is a chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images, audio messages and their
location.

## What can I do with it?
### enter a chatroom
- enter a chat room and start talking to friends and family

### send messages
-  send messages via the messaging function 

### send images
- send images as well as text

### share location
- share your location with your chat partner

### share audio recordings
- record and send audio messages your chat partner
  
### read messages offline
- access messages and chat history even when offline

### screen reader compatible
- engage with the chat interface even if visually impaired via screen reader functionality

## Key Features
- A page where users can enter their name and choose a background color for the chat screen
before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat provides users with three additional communication features: sending images, recorded audio messages and location data.
- Data is stored online and offline.


## Technical Specifications
- The app is written in React Native.
- The app is developed using Expo.
- The app is styled according to the given screen design.
- Chat conversations is stored in Google Firestore Database.
- The app authenticates users anonymously via Google Firebase authentication.
- Chat conversations are stored locally.
- The app lets users pick and send images from the phone’s image library.
- The app lets users take pictures with the device’s camera app, and send them.
- The app stores images in Firebase Cloud Storage.
- The app is able to read the user’s location data.
- The App allows recording of audio messages to be send via message
- Location data is sent via the chat in a map view.
- The chat interface and functionality is created using the Gifted Chat library.
- The app’s codebase contains comments.

## Getting Started
### The following technologies are needed to run this app:
- React Native
- Expo (toolchain to write native apps in JS)
- React Native Gifted Chat library
- Google Firestore DB
- Google Firebase Authentication
- AsyncStorage caching for offline use
- Firebase cloud storage (for storing images)
- Expo ImagePicker & MediaLibrary for integrating communication features
- Expo Location
- Expo Audio

### Set Up:
- Clone project via terminal: *git clone https://github.com/marksav85/chat-app.git*
- install compatible version of node: *npm install 16.19.0*
- install expo CLI: *npm install -g expo-cli*
- install the dependencies by running: *npm install*
- create an expo account and download Expo Go on your smartphone 
- Optionally also install and set up Android Studio on your computer.
- Run *npx expo start* or *expo start* to start app
- Use on screen QR code to sync with your Expo Go app

### Firebase:
To configure your own database to work with the app, you'll need to follow these steps:
- Create an account/login with Google Firebase
- Go to Firebase Console and create new project
- Set up Firebase Database:
    - Under Build follow the steps to create a new Database
    - Under the Rules tab, adjust rule to 'allow read, write: if **true**' and then Publish
- Set up Authentication:
  - Under Authentication, choose Anonymous sign in and enable
- Set up Configuration:
    - Under Project Settings, register your App
    - Copy the firebaseConfig provided and replace Config in App.js of your Chat-App  




    