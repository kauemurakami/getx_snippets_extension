# get-snippets
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/get_snippets_extension.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/kauemurakami/get_snippets_extension)

Extensão feita pra você, que também utiliza essa poderosa biblioteca e não gosta de perder tempo.  
Nessa extensão, você encontra snippets de trechos de códigos, ou até mesmo classes inteiras, geradas apenas com alguns toques no teclado, é rápido e fácil.  
Então saia na frente e comece a usar, são apenas 10 snippets, com o prefixo totalmente intuitivo, pra você não se esquecer :D
> A extensão foi feita para que possamos começar um projeto completo funcional sem nenhuma alteração necessária.
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
## Observações
**implementação**
>Erros de importação podem aparecer até que todos os arquivos estejam criados. 
>Quando todos os arquivos estiverem criados, basta importar todas as dependências para resolver todos os erros.
#
**estrutura proposta**  
|-- lib  
&nbsp;&nbsp;&nbsp;|-- src  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- controller  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- data  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- ui  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- routes  
&nbsp;&nbsp;&nbsp;|-- main.dart  


## Features

### getmain
Reescreva de forma rápida seu arquivo **main.dart**  
**getmain** snippet lhe trará a classe completa, sendo necessário apenas setar sua **home**  
**Uso:** Na sua classe main, delete **todo** o conteúdo e comece escrevendo **getmain**,  
espere pelo snippet e pronto !

![](examples/getmain.gif)

### getpage
Crie, de forma rápida, classes Stateless com widget e recursos reativos fornecidos pelo [Get](https://pub.dev/packages/get), GetX,  
**getpage** snippet, lhe trará uma classe stateless completa, você só precisará indicar:  
- O nome da sua Page;  
- O nome do seu Repository;  
- O widget **pai** de **GetX**.
- O nome controller,
- o widget filho de **GetX**.  
**Uso:** Ao criar um arquivo ***my_page.dart*** vazio, você pode começar escrevendo **getpage**,  
espere pelo snippet, defina os dados necessários e pronto !  
>> **DICA IMPORTANTE:** Para aproveitar totalmente o uso desse package, ao gerar classes com mais de um atributo a ser definido, você pode defini-los de forma sequêncial, a cada palavra completa pressione **TAB** para ir pro próximo atributo.

![](examples/getpage.gif)

### getroutes
Crie, de forma rápida, uma classe para gerenciar suas Rotas com [Get](https://pub.dev/packages/get)  
**getroutes** snippet, lhe trará uma classe Route completa, você só precisa acrescentar mais rotas.  
**Uso:** Ao criar um arquivo ***my_routes.dart*** vazio, você pode começar escrevendo **getroutes**,  
espere pelo snippet e pronto !

![](examples/getroutes.gif)

### getcontroller
Crie, de forma rápida, classes Controller com RxController do [Get](https://pub.dev/packages/get).  
**getcontroller** snippet, lhe trará uma classe Controller completa.  
**Uso:** Ao criar um novo arquivo ***my_controller.dart*** vazio, comece escrevendo **getcontroller**,  
espere pelo snippet, defina os dados e pronto !

![](examples/getcontroller.gif)

### getrepository
Crie, de forma rápida, classes Repository para suas entidades.  
**getrepository** snippet, lhe trará uma classe Repository completa, incluindo um exemplo de um crud completo que se complementa quando você gerar o provider com *getprovider*.  
**Uso:** Ao criar uma novo arquivo ***my_repository.dart*** vazio, comece escrevendo **getrepository**,  
espere pelo snippet, defina os dados e pronto !

![](examples/getrepository.gif)

### getprovider
Crie de forma rápida classes Provider, para prover dados à sua aplicação, seja via API ou banco de dados local.  
**getprovider** snippet, lhe trará uma classe Provider completa, incluindo exemplos de um crud completo que podem ser consumidos pelas função geradas no com *getrepository*.  
**Uso:** Ao criar um novo arquivo ***my_provider.dart*** vazio, comece escrevendo **getprovider**,  
espere pelo snippet, defina os dados e pronto !

![](examples/getprovider.gif)

### getfinal
Crie de forma rápida variáveis **final observável** pelo [Get](https://pub.dev/packages/get).  
**getfinal** snippet, lhe trará uma variável final observável e seus métodos **get** e **set**.  
**Uso:** Em qualquer arquivo que possuir o package [Get](https://pub.dev/packages/get), basta começar escrevendo **getfinal**,  
espere pelo snippet, defina o nome da variável e pronto !

![](examples/getfinal.gif)

### getset
Crie de forma rápida uma função **set** para um observável [Get](https://pub.dev/packages/get).  
**getset** snippet, lhe trará uma função para atribuir um valor em seu observável.  
**Uso:** Em qualquer arquivo que possuir o package [Get](https://pub.dev/packages/get), basta começar escrevendo **getset**,  
espere pelo snippet, defina o nome da variável e pronto !

![](examples/getset.gif)

### getget
Crie de forma rápida uma função **get** para um observável [Get](https://pub.dev/packages/get).  
**getget** snippet, lhe trará uma função para recuperar o valor do seu observável.  
**Uso:** Em qualquer arquivo que possuir o package [Get](https://pub.dev/packages/get), basta começar escrevendo **getget**,  
espere pelo snippet, defina o nome da variável e pronto !

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

