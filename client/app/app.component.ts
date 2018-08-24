import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";

import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import {User} from "./_models/user";
import { AuthenticationService } from "./_services/authentication.service";



@Component({
  moduleId : module.id,
  selector: 'my-app',
  templateUrl : "app.component.html",
})
export class AppComponent  implements OnInit{ 
  name = 'LaLifeApp';
  // user : User;
  user : Observable<User>;
  subscription : Subscription;

  loggedUser : User;

  constructor(
    private authenticationService : AuthenticationService
  ){

  }

  ngOnInit() : void {

        this.authenticationService.getUser().subscribe(userObservable => {
          this.loggedUser = userObservable;
        });

  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


}
