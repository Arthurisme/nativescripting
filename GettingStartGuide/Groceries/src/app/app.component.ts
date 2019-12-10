import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import {UserService} from "~/app/shared/user/user.service";
import {Router} from "@angular/router";

@Component({
    selector: "gr-main",
    providers: [UserService],
    template:'<page-router-outlet></page-router-outlet>'
})
export class AppComponent {

}
