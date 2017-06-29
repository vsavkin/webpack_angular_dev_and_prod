// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// import angular
import '@angular/core';
import '@angular/forms';
import '@angular/router';
import '@angular/platform-browser';

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';

import { environment } from './environments/environment';
import { enableProdMode } from "@angular/core";

console.log(environment);
if (environment.production) {
  console.log("enable prod mode");
  enableProdMode();
} else {
  console.log("dev mode");
}

platformBrowserDynamic().bootstrapModule(AppModule);