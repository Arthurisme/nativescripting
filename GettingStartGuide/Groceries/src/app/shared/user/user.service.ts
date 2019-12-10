import {User} from "~/app/shared/user/user";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Config} from "~/app/shared/config";
import {catchError, tap} from "rxjs/internal/operators";
import {throwError} from "rxjs";


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    public register(user: User) {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        );
    }

    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": Config.appUserHeader,
        });
    }


    public login(user: User) {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey + "/login",
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        )
            .pipe(
                tap((data: any) => {
                    Config.token = data._kmd.authtoken;
                }),
                catchError(this.handleErrors)
            );
    }



    private handleErrors(error: HttpErrorResponse) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}