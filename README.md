# Invygo
Invygo Meets RSVP Assignment

# Libraries
```bash
#React
"react": "18.1.0",
"react-native": "0.70.6",

#Navigation
"@react-navigation/native": "^6.1.1", 

#State Management
"react-redux": "^8.0.5"
"@types/react-redux": "^7.1.24",
"@reduxjs/toolkit": "^1.9.1",

#Utility functions for common programming tasks
    "lodash": "^4.17.21",

#Redux middleware library for efficiently handling asynchronous side effects
"redux-saga": "^1.2.2"

#HTTP client API Calls
"axios": "^1.2.1",

#Localization
"localized-strings": "^0.2.4",
"react-native-localize": "^2.2.4",

#Get Device Information
"react-native-device-info": "^8.7.1",


```

# Folders
```bash
#Actions
-> Message.ts action to call saga 

#Components
- Elements -> Has All the customized elements like Button, Text
- Routes -> Has all the navigations
- Screens -> Has all the screens

#Constants
- Actions -> Saga action name for calling
- Images -> Images path and Names
- Screens -> Screen Names
- URL -> Contains API Url

#Localization
- Contains language related files

#Network
- Contains Network Helper

#Reducers
- Slices and States handled by Redux Toolit

#Store
- Combined all the stores and configure

```

## Installation

Use Brew and Yarn

```bash
From the Mac machine 

Step 1: Following command will use to Install brew installer in you Mac system

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Step 2: Following command will use to Install React Native CLI packages 

$ brew install yarn								
$ brew install node								
$ brew install watchman						
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8

Step3: Following command will use to Install Cocopod package. This packager will use only for iOS build

$ sudo gem install cocoapods

Step4: Following command will use to Install Xcode CLI package

$ xcode-select --install
```

## Run

Use Brew and Yarn for Mac

```bash
From the Terminal 

Step 1: Following commands will use to run the app

In Project root directory
1. yarn install 
2. cd ios 
3. pod install

In Project root directory
#Android
yarn run android

#iOS
yarn run ios
```
