import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

class Config{
    public urls;
}

@Injectable()
export class ConfigProvider {
    private configUrl = 'app/config/config.json';
    private configJSON: Config;

    constructor (private http: Http) {
        this.configJSON={
            "urls":{
                "listOfPeople":"http://private-20f531-ed2016.apiary-mock.com/vts-ed-rest-api/profiles"
            }
        };
        //this.configPromise=http.get(this.configUrl).map(res => res.json());
    }

    getUrls(){
        return this.configJSON.urls;
    };

}
