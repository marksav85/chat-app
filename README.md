
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
- Expo audio-av

### Set Up:
- Clone project via terminal: git clone 
- install compatible version of node: npm install 16.19.0
- install expo CLI: npm install -g expo-cli
- create an expo account and login via terminal: expo login
- download Expo Go on your smartphone, and/or install and set up Android Studio on your computer.
- install dependencies: npm install
  -  react-native-safe-area-context 
  -  react-native-screens 
  -  react-native-async-storage/async-storage
  -  react-native-community/netinfo 
  -  react-navigation/native 
  -  react-navigation/native-stack 
  -  expo firebase 
  -  react-native 
  -  react-native-gifted-chat 
  -  react-native-safe-area-context 
  -  react-native-screens 
  -  expo-image-picker 
  -  expo-location 
  -  react-native-maps

Run expo:

npm start, or expo start
sync Metro Bundler either with your smartphone (you will need to install the expoGo app) or using your device emulator to see the app live.




    