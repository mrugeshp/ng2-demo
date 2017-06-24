import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FirstService } from './first.service';

export class Person {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  template: `
      <app-junefour></app-junefour>.

      <p>Date 24/06/2017 Code</p>

      <ng-template #myTemplate>
        Template contents...
      </ng-template>

   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('myTemplate') myTemplate;

  constructor(private view : ViewContainerRef) {
   
  }

  ngOnInit() {
    this.view.createEmbeddedView(this.myTemplate);
  }

  /**
   * 
   * We can creat above same as like
   * 
   * constructor (private myService:FirstService){}
   * 
   */

}
