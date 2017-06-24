import { Component } from '@angular/core';
import { FirstService } from './first.service';

export class Person {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  template: `
      <app-junefour></app-junefour>
   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor() {
   
  }

  /**
   * 
   * We can creat above same as like
   * 
   * constructor (private myService:FirstService){}
   * 
   */

}
