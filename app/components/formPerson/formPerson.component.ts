import {Component, Output, EventEmitter} from '@angular/core';
//import {HTTP_PROVIDERS, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {ConfigProvider} from '../../config/config.provider';

@Component({
    selector: 'form-person',
    templateUrl: 'app/components/formPerson/formPerson.template.html',
    styleUrls: ['app/components/formPerson/formPerson.style.css']
})
export class FormPerson{
    @Output()
    onSubmit = new EventEmitter();

    dialog={title:"",message:""};

    constructor (private config: ConfigProvider) {}

    onSubmitClick(nameField, surnameField, emailField, dialogElement){
        if(nameField.validate() & surnameField.validate() & emailField.validate()){
            this.onSubmit.emit({
                firstName:nameField.value,
                lastName:surnameField.value,
                email:emailField.value
            });
            window.location.href=this.config.getPages().secondPage;
        }
        else
            dialogElement.open();
    }
}
