# NgRefresher - Angular Refresher Project before working with Ionic Projects

1. Go to the path you wanted to create the project and Create new project

   > ng new ng-refresher --strict false --standalone false

2. Install Visual Studio Code and extensions:

- Material Icon Theme
- Angular Essentials

3. open terminal and run the following to run locally:
   > ng serve

can access the app via http://localhost:4200/

---

Structure

1. main.ts - Angular run first pass AppModule here

2. App Module (app/app.module.ts) - Global Configuration of Angular App , define all components here, depends on Browser Module. Declare one root Compoennt - AppComponent here

3. AppComponent - one root Component  
   selector: 'app-root' , it have it's own html and css

4. selector app-root is being used in index.html

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
