import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { listOfComponents } from './listOfComponents';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [
    AppComponent,
    listOfComponents
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
