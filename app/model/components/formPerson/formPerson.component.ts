import {Component, Output, EventEmitter} from '@angular/core';
//import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-person',
    templateUrl: 'app/model/components/formPerson/formPerson.template.html',
    styleUrls: ['app/model/components/formPerson/formPerson.style.css']
})
export class FormPerson{
    @Output()
    onSubmit = new EventEmitter();

    dialog={title:"",message:""};

    constructor () {}

    onSubmitClick(nameField, surnameField, emailField, dialogElement){
        if(nameField.validate() & surnameField.validate() & emailField.validate())
            this.onSubmit.emit({
                firstName:nameField.value,
                lastName:surnameField.value,
                email:emailField.value
            });
        else
            dialogElement.open();
    }
}
