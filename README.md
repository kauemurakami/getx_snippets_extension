# get-snippets
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/get_snippets_extension.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/kauemurakami/get_snippets_extension)  
![](images/icon_readme.png)

Extension made for you, who also uses this powerful library and doesn't like to waste time.  
To that extent, you find snippets of snippets of code, or even entire classes, generated with just a few keystrokes, 
it's quick and easy.  
We came to make your development with [Get](https://pub.dev/packages/get) easy !!!    
So get out front and start using, it's just 11 snippets, with fully intuitive prefixes, so you don't forget :D  
> The extension was made so that we can start a complete functional project without any necessary changes.

#### download extension on [MarketPlace](https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets)

## Requirements
```
vscode ^1.43.0
dependencies:
  flutter:
    sdk: flutter
  get: ^2.12.1
  meta: ^1.1.8
  http: ^0.12.1 or dio: 3.x
```
## Comments
**implementation**
>Import errors can appear until all files are created. 
>When all files are created, just import all dependencies to resolve all errors.  

**Proposed structure -> subsequent changes will not change the current structure**
<pre>
|-- lib
  |-- src
    |-- controller
      |-- mycontrollerfolder
        |-- my_controller.dart 
    |-- data
      |-- model
        |-- my_model.dart
      |-- repository
        |-- my_repository.dart
      |-- provider
        |-- my_provider.dart
    |-- ui
      |-- android
        |-- widgets
          |-- custom_widgets_global.dart
        |-- mypagefolder
          |-- widgets
            |-- custom_widget_in_my_page.dart
          |-- my_page.dart
      |-- ios
      |-- theme
        |-- my_theme.dart
    |-- routes
      |-- my_routes.dart
  |-- main.dart
</pre>

## Example
[See complet exemple](https://github.com/kauemurakami/get_snippets_extension/tree/doc/examples)  
not yet available
## Features

### getmain
Quickly rewrite your file **main.dart**  
**getmain** snippet will bring you the complete class, you just need to set your **home**  
**Using:** In your main class, delete **all** the content and start writing **getmain**,  
wait for the snippet and that's it !

![](examples/getmain.gif)

### getpage
Quickly create, Stateless classes with widget and reactive features provided by [Get](https://pub.dev/packages/get), GetX,  
**getpage** snippet, will bring you a complete stateless class, you only need to indicate:  
- The name of your Page;  
- The name of your Repository;  
- The widget **parent** of **GetX**.
- The name of your Controller,
- The widget child of **GetX**.  
**Using:** When creating a file ***my_page.dart*** empty, you can start by writing **getpage**,  
wait for the snippet, define the necessary data and ready!!  
>> **IMPORTANT TIP:** To take full advantage of using this extension, when generating classes with more than one attribute to be defined, you can define them sequentially, every full word press **TAB** to go to the next expected attribute, many snippets do that.

![](examples/getpage.gif)

### getroutes
Quickly create, a class to manage your Routes with [Get](https://pub.dev/packages/get)  
**getroutes** snippet, will bring you a complete Route class, you just need to add more routes.  
**Using:** When creating a file ***my_routes.dart*** empty, you can start by writing **getroutes**,  
wait for the snippet and that's it !

![](examples/getroutes.gif)

### getroute
Now that you have the routes class, easily add another route with navigation [Get](https://pub.dev/packages/get)  
**getroute** snippet, will bring you complete route, you will only define the url and your page in an easy way.  
**Using:** Inside the file ***my_routes.dart***, in our class created with *getroutes*, you can start by writing **getroute**,  
wait for the snippet and that's it !

![](examples/getroute.gif)

### getcontroller
Quickly create Controller classes with RxController from [Get](https://pub.dev/packages/get).  
**getcontroller** snippet, will bring you a complete Controller class.  
**Using:** When creating a new file ***my_controller.dart*** empty, start writing **getcontroller**,  
wait for the snippet, set the data and you're done!

![](examples/getcontroller.gif)

### getrepository
Quickly create Repository classes for your entities.  
**getrepository** snippet, will bring you a complete Repository class, including an example of a complete crud that complements itself when you generate the provider with *getprovider*.  
**Using:** When creating a new file ***my_repository.dart*** empty, start writing **getrepository**,  
wait for the snippet, set the data and you're done !

![](examples/getrepository.gif)

### getprovider
Quickly create Provider classes, to provide data to your application, either via API or local database.  
**getprovider** snippet, will bring you a Provider class, including examples of a complete crud that can be consumed by the functions generated in the com *getrepository*.  
**Using:** When creating a new file ***my_provider.dart*** empty, start writing **getprovider**,  
wait for the snippet, set the data and you're done !

![](examples/getprovider.gif)

### getproviderdio
Has the same purpose as getprovider, but for people who use Dio instead of http.

![](examples/getproviderdio.gif)

### getfinal
Quickly create variables **final observável** for [Get](https://pub.dev/packages/get).  
**getfinal** snippet, will bring you an observable final variable and its methods **get** and **set**.  
**Using:** In any file that has the package [Get](https://pub.dev/packages/get), just start writing **getfinal**,  
wait for the snippet, set the variable name and you're done !

![](examples/getfinal.gif)

### getset
Quickly create a function **set** for an observable [Get](https://pub.dev/packages/get).  
**getset** snippet, will bring you a function to assign a value in your observable.  
**Using:** In any file that has the package [Get](https://pub.dev/packages/get), just start writing **getset**,  
wait for the snippet, set the variable name and you're done !

![](examples/getset.gif)

### getget
Quickly create a function **get** para um observável [Get](https://pub.dev/packages/get).  
**getget** snippet, will bring you a function to recover the value of your observable.  
**Using:** In any file that has the package [Get](https://pub.dev/packages/get), just start writing **getget**,  
wait for the snippet, set the variable name and you're done !

![](examples/getget.gif)

### getxlist
Quickly create a widget **GetX** from [Get](https://pub.dev/packages/get) containing a functional dynamic list, consuming your controller .  
**getxlist** this snippet will bring you the [Get](https://pub.dev/packages/get) widget, GetX, along with
some optional attributes and its builder function, which in turn contains a listview.separated with a child listtile to display values.  
**Using:** In any file that has the package [Get](https://pub.dev/packages/get), just start writing **getxlist**,  
wait for the snippet, set the variable name and you're done !  
> Notice that in the example we are using ***initState*** to enter a value for our variable. 
>We did this so that you can see that a statefull widget is not necessary when using ***Get***, you could start your page by calling >a ***controller function*** that retrieves all your users and inserting them into a ***variable in your controller***, for example, then just use >the same controller your controller inside the GetX widget.

![](examples/getxlist.gif)
### result
![](examples/getxlist.jpeg)

### getxlistdismissible
Quickly create a GetX widget from [Get](https://pub.dev/packages/get) containing a fully configured listview and dismissible widgets.  
**getxlistdismissible** it will bring you, a GetX Widget, a ListView containing a Dismissible ready to use, you can drag from beginning to end to edit or from end to beginning to delete, just create your functions in the controller.  
**Using:** In any widget that has the Get package, start writing **getxlistdismissible**,  
wait for the snippet, set the variable and function name and you're done !  

![](examples/getxlistdismissible.gif)
### result
![](examples/getxlistdismissibleresult.gif)


## Releases Notes

### 2.0.0 - current  
get-snippets release 2.  
:octopus: New Features :octopus:  
You can now create dynamic lists. With the getxlist snippet we will treat you:  
- GetX widget with optional attributes and its mandatory builder function  
- A configured ListView.separated  
- A ListTile to simulate your list  
You can now create dynamic lists with dismissibles already configured for you. As? with the command getxlistdismissible, of cours.   you don't need to write the whole name, this is for your best fixation, just to be intuitive, just start writing and wait for the snippet.  
- GetX widget with optional attributes and its mandatory builder function  
- A configured ListView.separated  
- A Dismissible Widget that allows you to perform actions by dragging items from the list TO BOTH SIDES, fully configured, just choose what to do with it !!!  
- A ListTile to simulate your list  

- Generation of Provider class Dio and http   
Start using and enjoy !!!

### 1.0.0
get-snippets initial release.
snippets para:  
- Generetion of Model class 
- Generation of Repository class  
- Generation of Controller class  
- Generation of Main class (**main**)  
- Generation of Provider class  
- Creating variables **.obs** together with their respective **get** e **set**  
- Generation of **um** get **ou um** set  
- Generation of class Routes and individual routes


**Enjoy!**

-----------------------------------------------------------------------------------------------------------

