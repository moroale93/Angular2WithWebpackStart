import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ConfigProvider } from '../config/config.provider';
import { ListResponse } from '../model/listResponse';
import { Person } from '../model/person';

@Injectable()
export class ApiRequester {
    private urls;

    constructor(private http: Http, private config: ConfigProvider) {}

    prepareRequest(request) : Observable<any> {
        return this.config.getUrls().flatMap(request);
        /*flatMap serve per ritornare il risultato della map precedente e deve ritornare una map. Esempio:
            Rx.Observable.fromPromise(p1())
                .flatMap(function(p1_result){return p2(p1_result);})
                .flatMap(function(p2_result){return p3(p2_result);})
        */
    };

    getPeople(): Observable<ListResponse<Person>>{
        return this.prepareRequest((urls) => {
            return this.http.get(urls.listOfPeople).map((res: Response)=>{return res.json();});
        });
    }

}