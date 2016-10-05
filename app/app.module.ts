import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AppComponent }   from './app.component';
import { SmartTable } from './components/smartTable/smartTable.component';
import { FormPerson } from './components/formPerson/formPerson.component';
import { User } from './components/user/user.component';
import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule, routing ],
  declarations: [
    AppComponent,
    PolymerElement('vaadin-grid'),
    PolymerElement('paper-input'),
    PolymerElement('gold-email-input'),
    PolymerElement('paper-button'),
    PolymerElement('paper-dialog'),
    SmartTable,
    FormPerson,
    User
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
