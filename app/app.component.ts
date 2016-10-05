//Devono esser importati tutti i componenti che servono nel nostro componente e tutti i provider che vogliamo utilizzare nella nostra provider hierarchy angular 2
import { Component } from '@angular/core';
import { SmartTable } from './components/smartTable/smartTable.component';
import { FormPerson } from './components/formPerson/formPerson.component';
import { Router } from '@angular/router';
import { ApiRequester } from './providers/apiRequester.provider';
import { ConfigProvider } from './config/config.provider';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.template.html',
  styleUrls:["./app/app.style.css"],
  providers:[ ApiRequester, ConfigProvider ] //dico quali provider posso utilizzare da qui in giu!
})

export class AppComponent {
    listOfPeople=[];

    constructor(private router: Router){
    }

    addNewPersonToTable(p){
        this.listOfPeople.push(p);
    }

    tableRowSelect(user){
        this.router.navigate(['/userDetail', user.id]);
    }
}
