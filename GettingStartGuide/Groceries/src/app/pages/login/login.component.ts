import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import {User} from "~/app/shared/user/user";
import {UserService} from "~/app/shared/user/user.service";
import {Page} from "ui/page";
import {Color} from "ui/page";
import { View } from 'tns-core-modules/ui/core/view';
import {TextField} from "ui/text-field";
import {setHintColor} from "~/app/utils/hint-util";



@Component({
    selector: "gr-main",
     templateUrl: 'login.component.html',
    styleUrls: ['login-common.css', 'login.css']
})
export class LoginComponent implements OnInit {

    public isLoggingIn = true;
    public user: User;

    // @ts-ignore
    @ViewChild ('container') container: ElementRef;
    // @ts-ignore
    @ViewChild ('email') email: ElementRef;
    // @ts-ignore
    @ViewChild ('password') password: ElementRef;

    constructor(
         private router: Router,
         private userService: UserService,
         private page: Page) {
        this.user = new User();
        this.user.email = 'is@live.ca';
        this.user.password = '1234';

    }

public ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = 'res://bg_login';
}

    public submit() {
        if(!this.user.isValidEmail()){
            alert('Enter a valid email address.');
            return;
        }
        if (this.isLoggingIn) {
            this.login()
        } else {
            this.signUp();
        }
    }







    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        const container = <View> this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color('white'): new Color('#301217'),
            duration: 200
        });

    }

    private login() {
        this.userService.login(this.user)
            .subscribe(
                 () => this.router.navigate(['/list']),
               // ()=> alert('You are logged in.'),
                (error) => alert('Unfortunately we could not find your account.')
            );
    }

    private signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert('Your account was successfully created.');
                    this.toggleDisplay();
                },
                () => alert('Unfortunately we were unable to create your account.')
            );
    }


    private setTextFieldColors() {
        const emailTextField = <TextField>this.email.nativeElement;
        const passwordTextField = <TextField>this.password.nativeElement;

        const mainTextColor = new Color(this.isLoggingIn ? 'black' : '#C4AFB4');
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;

        const hintColor = new Color(this.isLoggingIn ? '#ACA6A7' : '#C4AFB4');
        setHintColor({ view: emailTextField, color: hintColor });
        setHintColor({ view: passwordTextField, color: hintColor });
    }



}