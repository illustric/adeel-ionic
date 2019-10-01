import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user ={
    name: 'muhhammmad adeel',
    city: 'multan',
    interests: [ 'freelancing', 'bookreading', 'selflrearning' ]
  };

  constructor() {}

}
