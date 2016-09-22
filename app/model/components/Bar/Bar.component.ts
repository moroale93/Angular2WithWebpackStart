import {Component, Input, Output} from '@angular/core';//, EventEmitter

@Component({
    selector:'bar',
    templateUrl: 'app/model/components/Bar/Bar.template.html',
})

export class Bar{
    @Input() data:string;

    //@Output() onClick: EventEmitter = new EventEmitter();

    static incNum=0;
    id:number;

    constructor(){
        this.id = Bar.incNum++;
        console.log("creato" + this.id);
    }

    buttonClick(){
        //this.onClick.next(this.data);
    }
}
