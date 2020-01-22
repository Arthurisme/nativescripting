import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "~/currency/models/currency.model";

@Injectable()
export class CurrencyService {

    // Fetch the date via Http(if we have a http api provide data):
     private ROOT_URL = `https://api.intactai.com/catfactlist/v1`;
    constructor(private http: HttpClient) { }

    // @ts-ignore
    getCurrencyData(): Observable<Currency[]> {
        // return this.http.get<Currency[]>(`${this.ROOT_URL}/ticker`);
    }
}
