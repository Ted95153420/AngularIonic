# AngularIonic
Android App - uses googles book APi to retrieve book info

Things you will need to get you setup

node.JS - get this first :-
https://nodejs.org/en/download/

once you have nodejs downloaded and installed, you can use javas package manager from the command line
Install npm install -g cordova ionic


the Android SDK  - download it here :-
http://developer.android.com/

Once you have installed the Android SDK run the Android Sdk manager
HINT run C:\Users\<your username >\AppData\Local\Android\sdk\tools\android.bat
on the dialog that appears, select 'Intel x86 Emulator Acellerator (HAXM Installer)' (this is located under 'Extras')
once you have done this, follow these instructions...
The SDK Manager will download the installer to the "extras" directory, under the main SDK directory. Even though the SDK manager says "Installed" 
it actually means that the Intel HAXM executable was downloaded. 
You will still need to run the installer from the "extras" directory to finish installation.
Extract the installer inside the "extras" directory and follow the installation instructions for your platform
If you are wondering where this 'Extras' folder is, I found it under :-
C:\Users\<your username>\AppData\Local\Android\sdk\extras\intel\Hardware_Accelerated_Execution_Manager
Even when I ran the installer, I was faced with the message "This comuuter does not support virtualization Technology (VT-x). Haxm cannot be installed".
To get round this, I had to go to 
CONTROL PANEL -> PROGRAM and Feature
Click Trurn Windows deatures Onn/Off
UNCHCECK Hyper-V and restart the computer
after doing the above I was allowed to install HAXM.

Background / folder structure
'Dev' contails html and android controllers. The controllers and services are defined in controllers/app.js
node_modules contains the angular framework that the project uses.


AndroidApp
The Ionic framework was used to create the AndroidApp folder and its contents.
the following command was used :-
'ionic start AndroindApp blank'
this command was run from the AngularIonic folder and basically creates a new IOnic project in the folder 
you specify (in this case the AndroidApp folder).
You can specify different project template types - blank tabs and sidemenu. I went for 'blank' just to keep the app as simple as possible.
I can create tabbed or side menu later. The initial goal was to just create an app that can return book info and deploy it to a mobile device asap.




Overall - think of 'Dev' as a dort of playground - forget about AndroidApp - any new functionality / R&D stuff just get working in here.
At a later date you can incorporate whatever you wrote into your Android app.  

