import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kitten} from "~/kitten/models/kitten.model";

@Injectable()
export class KittenService {

    // Fetch the date via Http(if we have a http api provide data):
     private ROOT_URL = `https://api.intactai.com/catfactlist/v1`;
    constructor(private http: HttpClient) { }

    // @ts-ignore
    getKittenData(): Observable<Kitten[]> {
        // return this.http.get<Kitten[]>(`${this.ROOT_URL}/ticker`);
    }
}
