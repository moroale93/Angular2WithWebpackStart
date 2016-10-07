import {Component, Output, EventEmitter} from '@angular/core';
//import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {ConfigProvider} from '../../services/config.service';

@Component({
    selector: 'form-person',
    moduleId: module.id,
    templateUrl: 'formPerson.component.html',
    styleUrls: ['formPerson.component.css']
})
export class FormPerson{
    @Output()
    onSubmit = new EventEmitter();

    dialog={title:"",message:""};

    constructor () {}

    onSubmitClick(nameField, surnameField, emailField, dialogElement){
        if(nameField.validate() & surnameField.validate() & emailField.validate()){
            this.onSubmit.emit({
                firstName:nameField.value,
                lastName:surnameField.value,
                email:emailField.value
            });
            nameField.value="";
            surnameField.value="";
            emailField.value="";//TODO
        }
        else
            dialogElement.open();
    }
}
