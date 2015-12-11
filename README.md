# Book Searcher

Book Searcher is an angular app with well, a fairly unoriginal name. Feel free to think of something better and email me edward.milne@gmail.com. Basically Book Searcher uses googles api to search for a book by ISBN nnumber. Book searcher will :

  - Allow you to input an ISBN number
  - Display the books thumbnail, publisher and a few words about the book



> The reason book searcher was written was because I 'just 
>wanted to'. This is not a commercial application, although do feel free to buy me a pint if you see me out and about. Feel free to contribute to the project. What I'd like to do is scan in an ISBN, or have different tabe to search by author / title etc...

If you want to contribute to this project, then please note that there is a little bit of setup. I talk through this in the most basic way I can in the 'Tech / getting stuff' to work section if you try this and cant get it to work, pleas just ask me. I wont be annoyed / think you are stupid. Infact, I'll be quite flattered that you read the readme as far as you have.

### Version
1.0.0

### Tech / getting stuff to work

Book Searcher uses various components to work properly on your machine. This section should talk you through what you need to know to get stuff working on your machine.

##### MUST HAVE
* [Git] - download and install git on your machine. Create yourself a github account
* [GitRepo] - take a look at the Git Repo, clone it. HINT

```sh
$ git clone https://github.com/Ted95153420/AngularIonic.git
``` 

Take a couple of minutes to get a basic idea of the directory structure. There are three folders. AndroidBookSearch, AndroidScreenShots and Dev. Ignore AndroidScreenShots and Dev. These were added initially and are were used as a sort of 'playground' by by myself. AndroidBookSearch contains the angular/Ionic App. Navigate to AngularBookSearch/www - the html file references the scripts in the 'js' folder.
* [node.js] Download and install. Javas package manager is bundled in with this install. Once Installed, use the command line to install cordova and ionic

```sh
$ npm install -g cordova ionic
``` 

* [The Android SDK] Once you have the SDK downloaded and installed, you need to check certain things so that the android emulator will run. Run **C:\Users\<your username >\AppData\Local\Android\sdk\tools\android.bat** This will start a dialog which, from now on, will be referred to as the SDK Manager. Select 'Intel x86 Emulator Acellerator (HAXM Installer)'  NOTE : this is located under 'Extras'. Also, once checked, the SDK Manager displays the word 'Installed' next to the HAXM Installer. What it actually means is that it has downloaded the installer and saved it. It has not been run yet. For the installer itself, look in **C:\Users\<your username>\AppData\Local\Android\sdk\extras\intel\Hardware_Accelerated_Execution_Manager** Run the installer. You **MAY** see the message "This Computer does not support virtualization Technology (VT-x). HAXM cannot be installed" To get round this, navigate to CONTROL PANEL -> PROGRAMS AND FEATURES, then click 'Turn Windows features On/Off' Uncheck 'Hyper-V', then restart your computer and re-run the installer.

##### OPTIONAL
* [Ace Editor] - awesome web-based text editor

### Development

Want to contribute? Great!


### Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [The Android SDK]: <http://developer.android.com/>
   [Git]: <https://git-scm.com/download>
   [GitRepo]: <https://github.com/Ted95153420/AngularIonic>
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
