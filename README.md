# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#### Notas de las clases de la sección

## notas de la clase 33

las notas de esta clase estan en notion.

## notas de la clase 34

En esta clase inicializamos el proyecto de angular que utilizaremos en esta seccion.

ng new [nombre del proyecto]: con este comando le estamos diciendo a angular CLI que nos cree un nuevo proyecto de angular con el nombre que le especifiquemos.


ng serve [project]: es el equivalente de npm start pero en el angular CLI.

## notas de la clase 35

...

## notas de la clase 36

En esta clase el explico cual es el proposito de cada folder y de los archivos que estos tienen, menos de la carpeta src, eso lo dejo para la proxima clase.

tsconfig.json: Es el archivo de configuracion de TypeScript, basicamente le dice a TypeScript como queremos que se traduzca a JS.

tsconfig.spec.json: It is TypeScript configuration for the application tests.

tsconfig.app.json: is a file that is related to the Angular App in particular.

package-lock.json y package.json: https://medium.com/helpshift-engineering/package-lock-json-the-complete-guide-2ae40175ebdd -> en ese link esta la explicacion.

angular.json: The angular.json file at the root level of an Angular workspace provides workspace-wide and project-specific configuration defaults. These are used for build and development tools provided by the Angular CLI. Path values given in the configuration are relative to the root workspace directory.

.gitignore: no hay necesidad de explicarlo.

.editorconfig: no te tienes que preocupar por este archivo.

src: esta carpeta y lo que tiene el lo explicara en la siguiente clase.

node_modules: no hay que explicarlo.

vscode: contains files that have something with de VSC configurations, you can ignore it.

.angular: you can also ignore this folder.

## notas de la clase 37 (notas tecnicas): 

en esta clase el explico cual es el proposito de la carpeta src y el contenido de ella (pero no muy profundo).

src folder: Source files for the root-level application project.

app folder: Contains the component files in which your application logic and data are defined.

los archivos de la carpeta app, se explican el siguiente link: https://angular.io/guide/file-structure.

assets folder: Contains image and other asset files to be copied as-is when you build your application.

favicon.ico: ....

index.html: The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any <script> or <link> tags here manually.

main.ts: The main entry point for your application. Compiles the application with the JIT compiler and bootstraps the application's root module (AppModule) to run in the browser. You can also use the AOT compiler without changing any code by appending the --aot flag to the CLI build and serve commands.

styles.css: Lists CSS files that supply styles for a project. The extension reflects the style preprocessor you have configured for the project.

#### notas de la clase 37 (notas no-tecnicas):

src folder: Source files for the root-level application project.

Tenemos la carpeta app(se llama asi porque en ella se encuentra el app component), esta carpeta contiene una serie de archivos que en conjunto forman el app component, por eso si te fijas todos comienzan con la palabra app, porque son archivos del app component.

Usualmente el app component es el punto inicial de la aplicacion.

app.component.css: en este archivo se encuentran los estilos que van a ser aplicados a mi app.component.html, o mejor dicho al app component como tal.

app.component.html: Es el archivo HTML inicial que se va a cargar dentro del app-root element.

app.component.ts: Defines the logic for the application's root component, named AppComponent.

app.module.ts: Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent. As you add more components to the app, they must be declared here.

----------------------------------------------------------------

En el app.module.ts hay un NgModule al cual se le pasa un objeto, el contenido de ese objeto se explica en el siguiente link: 

https://v2.angular.io/docs/ts/latest/guide/appmodule.html

----------------------------------------------------------------

assets folder: Contains image and other asset files to be copied as-is when you build your application.

favicon.ico: .....

index.html: The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any <script> or <link> tags here manually.

main.ts: Este archivo sirve para decirle a angular el ambiente en el que esta corriendo. (usualmente este archivo no se toca).

styles.css: Este es un archivo de estilos globales, lo que escribamos en este archivo va a ser css que se va a plicar a nivel general en toda la aplicacion.

#### notas de la clase 38: 

En la clase 37 dentro de la explicacion de los archivos y eso, el explico mas o menos que hacia el app.component.ts, pero en vdd lo dejo en el aire.

En la clase 38 a diferencia de la 37, el explico con detenimiento que es lo que hace el archivo app.
component.ts, mas especificamente que es lo que hace el decorador en ese archivo, el tambien explico unos cuantas cosas sobre la clase de typeScript que esta en ese archivo, pero realmente no la explico en profundidad.

{{}} -> lo podemos usar en angular para meter expresiones asi como referencias a variables dentro de nuestro HTML.

Nota personal: tengo la impresion de que app.module.ts es el que coje este archivo y realmente lo aplica, pero no me queda claro, this is something to look out for.

------------------------------------------------

Me quedo la duda de como se relaciona el app.component.ts y el app.module.ts, despues preguntale a heger o a otro muchacho, pa que te explique eso bien.

------------------------------------------------

#### notas de la clase 39: 

En esta clase el realizo un contador.

Hay una imagen en el desktop, la cual tiene el codigo de la clase, tambien tiene los comentarios sobre las dudas que te quedaron.

Cuando le tires a Heger aprovecha para que le preguntes de eso.


#### notas de la clase 40: 

En esta clase el cambio el contador por metodos, y luego creo un metodo solo.

Todo lo de esta clase se entiende, quedaron las mismas preguntas que la clase anterior.

#### notas de la clase 41:

En esta clase realizamos una tarea, sobre lo que vimos en la clase 39 y 40.

#### notas de la clase 42:

Es una buena practica poner despues del punto el nombre del objeto (componente, servicio, directiva, pipe), por ejemplo: contador.component.ts

En esta clase el nos enseño como crear un componente de manera manual, esto de manera que en el futuro cuando creemos nuestros componentes de manera automatica, sepamos como se creo este, y podamos arreglar cualquier error que surja en la creacion automatica.

Notas:

Usualmente en el app.component.html tu vas a tener una etiqueta y dentro de esa etiqueta se va a cargar el HTML que le corresponde a ese archivo, a menos que tu aplicacion sea super pequeña no veras el HTML como tal dentro de este archivo.

Esto tambien nos sirve con la reutilizacion del codigo.

@NgModule({

  Aqui es donde vamos a colocar nuestros componentes.

  declarations: [
    AppComponent,
    ContadorComponent
  ],

  Aqui es donde vamos a colocar otros modulos.
  imports: [
    BrowserModule
  ],

  Aqui es donde pondremos nuestros servicios.
  providers: [],

  Este ya sabes que hace.

  bootstrap: [AppComponent]
})

#### 43. Componente de Heroe y separación de directorios.

El objetivo de esta clase era comenzar a modularizar nuestra aplicacion, por eso tomamos el componente contador y lo pusimos dentro de una carpeta de modulo (llamada contador) que tendra todo lo concerniente a el contador, hicimos lo mismo con todo lo relacionado a los heroes.

Notas:

1-) Algo fundamental para una aplicacion de angular, es un buen manejo del nombre de los directorios, y estructura de arboles de directorios y archivos que vas a manejar en tu proyecto.

2-) El recomendo utilizar una buena practica, que dice lo siguiente: debemos tratar de agrupar nuestra aplicacion por modulos.

3-) En el app component.html no vamos a trabajar directamente, sino que hay solo pondremos las etiquetas correspondientes, para que se cargue el HTML correspondiente.

4-) Cuando se crea un componente tiene que estar importado en un modulo, por ejemplo en tu root folder (app) tu tienes un modulo (app.module.ts), en ese modulo estan todos sus componentes declarados en el declarations array.


#### 44 Cambios en el template del componente.

En esta clase trabajaremos en el heroe component, esto quiere decir que cambiamos el codigo en los archivos heroe.component.ts y heroe.componente.html. -> literalmente eso fue todo lo que hicimos.

En esta clase no hubo una idea en particular, ni nada que apuntar, solo mencionar que el creo un getter (por eso investigue aparte sobre los getters y setters en angular) -> y que eso es algo diferente.

Lo unico que vale la pena mencionar de esta clase, fue que en el minuto 4:50, el hablo de los getters y setters en angular, e hizo un getter en la clase HeroeComponente.

#### 45. Concepto de one way data binding - enlazado en una sola vía.

En esta clase el explico el concepto de one way data binding, el cual consiste en lo siguiente: One-way and two-way data binding are two of the important ways by which we can exchange data from component to DOM and vice-versa. Data exchange between the component and the view will help us to build dynamic and interactive web applications.

Esto lo hizo mediante dos ejemplos de codigo, en los cuales se ilustraba lo siguiente: Cambiabamos el valor de una propiedad utilizada en ciertos tags del HTML correspondiente y solamente se volvian a renderizar aquellos elementos del HTML que utilizaban esas propiedad, esto para mostrar los tags con los valores actualizados.

https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular -> en ese link se desarrolla el tema del data binding en angular.

Nota:

Lo que hicimos en esta clase segun el instructor es one way data binding, segun dice el esto es asi porque solamente podemos cambiar el valor de las variables desde la clase y como consecuencia que se refleje en el HTML, pero por ejemplo no podemos cambiar el valor de la variable desde el HTMl y que se refleje en la clase.

No se recomienda utilizar el two way data binding, se recomienda utilizar el one way data binding.

En esta clase el continuo lo que estabamos haciendo en la anterior.


#### 46. Crear componente de forma automática

En esta clase vamos a crear un nuevo componente para en la clase posterior explicar las directivas basicas de angular.

En este clase simplemente creamos el listado componente de manera automatica.

Cuando creamos un componente de manera automatica, se crean los 4 archivos que conforman un componente, el archivo de styles, el archivo html, el archivo de pruebas, y el archivo de logica el .ts.

El comando te configura el componente full de una.

beneficio de crear componente automatico: Nos ahorra tiempo.

ng generate component [direccion donde queremos que se cree el componente]

ng g c heroes/listado -> esta es una forma corta de hacer el comando.

#### 47. Directiva *ngFor:

What is a structural directive?

Las directivas estructurales nos permiten añadir, manipular o eliminar elementos del DOM.

En esta clase el nos enseño la directiva ngFor:

1-) Para que sirve? A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.

<ul>
  <li *ngFor="let heroe of heroes; let i = index">
    {{ i }} - {{ heroe }}
  </li>
</ul>

Despues de esto nos dejo dos tareas de eso mismo, las cuales completaste.

#### 48. Directiva *nglf

En esta clase hablamos sobre la directiva nglf.

Esta directiva nos sirve para mostrar un elemento HTML de manera condicional, si el valor que queda en la directiva es true, se muestra el elemento, si el valor que queda es false, pues no se muestra el elemento.

<div *ngIf="heroeBorrado ? true : false">
  <h3>Heroe borrado: <small> {{ heroeBorrado }} </small> </h3>
</div>

#### 49. Ng-Template y el nglf-else:

En esta clase hablamos sobre las directivas Ng-Template y nglf-else.

La directiva nglf-else nos sirve para que cuando no se muestre el elemento del nglf podamos referenciar otro elemento y que este se muestre, ese otro elemento lo creamos con la directiva Ng-template.

<div *ngIf="heroeBorrado; else noBorrado">
  <h3>Heroe borrado: <small> {{ heroeBorrado }} </small> </h3>
</div>

<ng-template #noBorrado>
  <h3>No ha borrado nada.</h3>
</ng-template>

#### 50. Módulos:

-------------------------------------------------

Pilares:

1-) Puyar. *

2-) Investigar por fuera. (No lo investigue en esta misma clase), pero en una clase anterior ya lo habia investigado.

3-) Entender. * (osea explicartelo a ti mismo)

4-) Idea central.  (no habia una idea central como tal), en lo que escribi se entiende lo que el cubrio en la clase.

-------------------------------------------------

Esta clase dura 10 minutos - deberias terminarla en 30 minutos.

El comenzo hablando sobre que esta es una clase abstracta (osea teorica) en la cual el va a hablar de los modulos.

Despues el hablo de que son los modulos, (en realidad no dijo eso), sino que se puso a hablar del app.module.ts (Como ya entiendes todo lo relacionado a este modulo you can just move on).

Despues de esto la idea que el planteo fue la siguiente: 

El objetivo de los modulos es ayudarnos a agrupar componentes y piezas de nuestra aplicacion que tienen sentido entre si, de manera que tengamos varios modulos cada uno para un aspecto en particular de esta, de manera que no tengamos 1 solo modulo con 100 importaciones y 100 componentes declarados en el declarations array.

Las carpetas contador y heroes ( en general las carpetas como esta son carpetas de modulo):

Despues de esto hablo sobre los objetivos de los modulos:

1-) Encapsular las cosas.

2-) Ayudarnos con la carga perezosa.

¿Que es la carga perezosa?

El lo dijo por arribita, pero es cargar los modulos bajo demanda osea solamente cargo los modulos que se requieran, si un modulo no se requiere no se carga.

Despues de esto creo el modulo heroes.module.ts dentro de la carpeta de modulos llamada heroes, el proposito de este modulo (osea heroes.module.ts) es agrupar todo lo concerniente a los heroes.

Despues de crear el modulo se puso a escribir el codigo que este necesita para funcionar correctamente, aqui solo escribire lo que el dijo o hizo (con relacion a este modulo) que era desconocido para mi en ese momento:

import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

  declarations: [
    HeroeComponent,
    ListadoComponent
  ],

  // En el export yo pongo las cosas que quiero que sean visibles fuera de este modulo.

  exports: [
    ListadoComponent
  ],
  
  // Dentro de imports solamente se agregan modulos

  imports: [
    CommonModule
  ]
})
export class HeroesModule {}


----------------------------------------------------------

Esta clase la termine en 3h y 10 minutos, ya se que fue mucho tiempo para una clase de 10 minutos, pero en mi defensa, en esta clase hubo mucho jugo, realmente estuvo justificado aunque sea un poco el haber tardado tanto.

Pero... muy buen trabajo en esta clase, realmente todo lo que se supone que deberias hacer en cada clase lo hiciste en esta, y eso es una muy buena señal.

#### 51. Módulos - segunda parte:

-------------------------------------------------

Pilares:

1-) Puyar. * (como el nos mando a hacer una tarea en esta clase pues eso cuenta como puyar).

2-) Investigar por fuera. (no fue necesario)

3-) Entender. * (osea explicartelo a ti mismo)

4-) Idea central.  (no habia una idea central como tal), en lo que escribi se entiende lo que el cubrio en la clase.

-------------------------------------------------

A partir del minuto 1 es que se pone a exponer el tema de la clase, ante de eso no dice nada.  

Esta clase dura 8 minutos deberias acabarla en 30 minutos.

Despues del minuto 1 el se pone a explicar que es lo que hace el CommonModule (el que esta en el imports array del archivo heroes.module.ts).

El CommonModule es un modulo que nos provee de directivas como ngIf y ngFor, entre otras cosas.

Por eso cuando el lo quita del imports array en el heroes.module.ts en el archivo listado.component.html tenemos errores, porque ya no tenemos acceso a las directivas que estamos utilizando ese archivo HTML.

Despues de esto el nos dejo una tarea, la tarea dice asi:

Tarea:

// Crear un modulo llamado ContadorModule
// declaraciones, y exportaciones

Nota:

Al final de esta clase el dijo que estamos trabajando con el concepto de aplicaciones modularizadas, esto es por lo siguiente: este proyecto esta modularizado, osea lo tenemos dividido por modulos, y el explico que trabajaremos de esta manera por el resto del curso ( osea creando directorios y dentro de ellos tendremos un modulo y todo lo concerniente al modulo).  -> esta es una buena practica y deberiamos seguirla siempre que podamos.









