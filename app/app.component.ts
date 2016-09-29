import { Component } from '@angular/core';
import { SmartTable } from './model/components/smartTable/smartTable.component';
import { FormPerson } from './model/components/formPerson/formPerson.component';
import {Person} from './model/data/Person';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.template.html',
  styleUrls:["app/app.style.css"],
  providers:[Person]
})

export class AppComponent {
    listOfPeople: Person[]=[];

    constructor(){
    }

    addNewPersonToTable(p:Person){
        this.listOfPeople.push(p);
    }
}
