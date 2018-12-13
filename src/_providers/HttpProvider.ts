import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpProvider {

    baseUrl: string = "http://10.0.29.30:8000/";
    
    constructor(private http : Http) {
      
    }

    GetData(requestUrl : string) : Observable<any> {
        return this.http.get(this.baseUrl + requestUrl,  new RequestOptions({
            'headers': new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            ).map((response: Response)=> response).catch(this.HandleError);
    }

    PostData(data:any, requestUrl : string) : Observable<any> {
     console.log(this.baseUrl + requestUrl);
        return this.http.post(this.baseUrl + requestUrl, data,  new RequestOptions({
            'headers': new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            ).map(
                (response:Response)=>response
        ).catch(this.HandleError);
    }

    HandleError(error:any) {
        return Observable.throw(new Error(error.status));
    }    
}