import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AppComponent }   from './app.component';
//import { Bar } from './model/components/Bar/Bar.component';
import { SmartTable } from './model/components/SmartTable/SmartTable.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    SmartTable,
    //Bar,
    PolymerElement('vaadin-grid')
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
