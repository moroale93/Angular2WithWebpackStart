import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AppComponent }   from './app.component';
import { SmartTable } from './model/components/SmartTable/SmartTable.component';
import { FormPerson } from './model/components/FormPerson/FormPerson.component';



@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    PolymerElement('vaadin-grid'),
    PolymerElement('paper-input'),
    PolymerElement('gold-email-input'),
    PolymerElement('paper-button'),
    SmartTable,
    FormPerson
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
