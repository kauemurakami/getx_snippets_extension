# get-snippets
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/get_snippets_extension.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/kauemurakami/get_snippets_extension)

Extensão feita pra você, que também utiliza essa poderosa biblioteca e não gosta de perder tempo.  
Nessa extensão, você encontra snippets de trechos de códigos, ou até mesmo classes inteiras, geradas apenas com alguns toques no teclado, é rápido e fácil.  
Então saia na frente e comece a usar, são apenas 10 snippets, com o prefixo totalmente intuitivo, pra você não se esquecer :D
#
Download da extensão para vccode.

## Requirements
```
dependencies:
  flutter:
    sdk: flutter
  get: ^2.12.1
  meta: ^1.1.8
  http: ^0.12.1
```

## Features

### getmain
Reescreva de forma rápida seu arquivo **main.dart**  
**getmain** snippet lhe trará a classe completa, sendo necessário apenas setar sua **home**  
**Uso:** Na sua classe main, delete **todo** o conteúdo e comece a escrever **getmain**,  
espere pelo snippet e pronto !

![](examples/getmain.gif)

### getpage
Crie de forma rápida uma classe stateless com os widgets e recursos reativos fornecidos pelo [Get](https://pub.dev/packages/get), GetX,  
**getpage** snippet, lhe trará uma classe stateless completa, você só precisará indicar:  
- O nome da sua Page;  
- O nome do seu Repository;  
- O widget **pai** de **GetX**.
- O nome controller,
- o widget filho de **GetX**.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getpage**,  
espere pelo snippet, defina os dados necessários e pronto !  
>> **DICA IMPORTANTE:** Para aproveitar totalmente o uso desse package, ao gerar classes com mais de um atributo a ser definido, você pode defini-los de forma sequêncial, a cada palavra completa pressione **TAB** para ir pro próximo atributo.

![](examples/getpage.gif)

### getroutes
Crie de forma rápida uma classe para gerenciar suas rotas com [Get](https://pub.dev/packages/get)  
**getroutes** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getroutes.gif)

### getcontroller
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getcontroller.gif)

### getrepository
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getrepository.gif)

### getprovider
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getprovider.gif)

### getfinal
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getfinal.gif)

### getset
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getset.gif)

### getget
Crie de forma rápida uma classe com RxController, disponível no package [Get](https://pub.dev/packages/get)  
**getcontroller** snippet, lhe trará uma classe controller completa, você só precisará indicar o nome assim que usar o snippet.  
**Uso:** Ao criar uma novo arquivo *controller.dart* vazio, comece a escrever **getcontroller**,  
espere pelo snippet e pronto !

![](examples/getget.gif)

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Release inicial de get-snippets  
snippets para:  
- Geração de classe Model  
- Geração de classe Repository  
- Geração de classe Controller  
- Geração de classe principal (**main**)  
- Geração de classe Provider  
- Criação de variáveis **.obs** juntamente com seus respectivos **get** e **set**  
- Geração de **um** get **ou um** set  


**Aproveite!**

-----------------------------------------------------------------------------------------------------------

