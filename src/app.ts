import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'root-cmp',
  template: `Root`,
})
export class RootCmp {}

@NgModule({
  imports: [
    BrowserModule,
  ],
  bootstrap: [RootCmp],
  declarations: [RootCmp]
})
export class AppModule {}