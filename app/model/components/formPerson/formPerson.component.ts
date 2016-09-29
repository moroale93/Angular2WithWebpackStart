import {Component, Output, EventEmitter} from '@angular/core';
//import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Person} from './../../data/Person';

@Component({
    selector: 'form-person',
    templateUrl: 'app/model/components/formPerson/formPerson.template.html',
    styleUrls: ['app/model/components/formPerson/formPerson.style.css']
})
export class FormPerson{
    @Output()
    onSubmit = new EventEmitter();

    constructor () {}

    onSubmitClick(name:string, surname:string, email:string){
        var personToPass=new Person(name, surname, email);
        console.log(personToPass.getName())
        this.onSubmit.emit(personToPass);
    }
}
