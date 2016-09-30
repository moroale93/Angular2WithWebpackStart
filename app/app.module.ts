import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AppComponent }   from './app.component';
import { SmartTable } from './model/components/smartTable/smartTable.component';
import { FormPerson } from './model/components/formPerson/formPerson.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [
    AppComponent,
    PolymerElement('vaadin-grid'),
    PolymerElement('paper-input'),
    PolymerElement('gold-email-input'),
    PolymerElement('paper-button'),
    PolymerElement('paper-dialog'),
    SmartTable,
    FormPerson
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
