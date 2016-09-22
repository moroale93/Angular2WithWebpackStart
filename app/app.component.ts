import { Component } from '@angular/core';
//import { Bar } from './model/components/Bar/Bar.component';
import { SmartTable } from './model/components/SmartTable/SmartTable.component';

@Component({
  selector: 'my-app',
  template: '<smart-table><smart-table>', //<bar [data]="titolo" (onClick)="logga($event)"></bar>',
  //directives: [SmartTable]
})

export class AppComponent {
    //titolo:string="Hello from my first component!";
    //logga(arg){
    //    console.log(arg);
    //}
}
