import { Component, OnInit } from "@angular/core";
import {KittenService} from "~/kitten/services/kitten.service";
import {Kitten} from "~/kitten/models/kitten.model";
import {Observable} from "rxjs";


@Component({
  selector: "my-app",
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  // Your TypeScript logic goes here

  kittens$ : Observable<Kitten[]>;


  constructor(private kittenService: KittenService){}

  ngOnInit() {
    this.kittens$ = this.kittenService.getKittenData();
  }
}
