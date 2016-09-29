import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Person} from './../../data/Person';

@Component({
  selector: 'smart-table',
  templateUrl: 'app/model/components/smartTable/smartTable.template.html',
  styleUrls: ['app/model/components/smartTable/smartTable.style.css']
})

export class SmartTable{
    @Input()
    people: Person[]=[];

    constructor () {}


}
