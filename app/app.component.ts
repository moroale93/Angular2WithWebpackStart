import { Component } from '@angular/core';
import { SmartTable } from './model/components/smartTable/smartTable.component';
import { FormPerson } from './model/components/formPerson/formPerson.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
  styleUrls:["app/app.style.css"]
})

export class AppComponent {
    listOfPeople=[];

    constructor(){
    }

    addNewPersonToTable(p){
        this.listOfPeople.push(p);
    }
}
