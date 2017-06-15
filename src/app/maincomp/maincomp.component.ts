import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-maincomp',
  template: `
    <p>
      maincomp Works!
    </p>
   
    <!-- <input type="text" [value]="myService.getMessage()" /> -->

    <!--- Two way data binding for ngModel -->

     <input type="text" [(ngModel)]="myService.message" />

    <input [(ngModel)]="name" #ctrl="ngModel" required>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>

  `,
  styles: []
})
export class MaincompComponent implements OnInit {

  name: string = '';
  
  constructor(private myService: FirstService) {
    myService.setMessage("My name from Main Comp");

  }

  ngOnInit() {
  }

}
