import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "~/currency/models/currency.model";

@Injectable()
export class CurrencyService {


    // private ROOT_URL = `https://api.coinmarketcap.com/v1/ticker`;
    private ROOT_URL = `https://api.coinmarketcap.com/v1`;
    constructor(private http: HttpClient) { }

    // @ts-ignore
    getCurrencyData(): Observable<Currency[]> {
        return this.http.get<Currency[]>(`${this.ROOT_URL}/ticker`);
    }
}