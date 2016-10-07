import {Component, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-rx-js',
    moduleId: module.id,
    templateUrl: 'formRxJs.component.html',
    styleUrls: ['formRxJs.component.css']
})
export class FormRxJs{
    @Output()
    onSubmit = new EventEmitter();

    dialog={title:"",message:""};

    constructor () {}

    onSubmitClick(nameField, surnameField, emailField){
        if(nameField.validate() & surnameField.validate() & emailField.validate()){
            this.onSubmit.emit();
        }
    }
}
