import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  template: `
    <p>
      testcomp Works!
    </p>

    {{name}}

    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>  

    <p *ngIf="items.length > 2">More than 2 items</p>

    <span [hidden]="true">changed</span>

    <input #heroInput><p>values: {{heroInput.value}}</p>


    <app-subcomp *ngFor="let item of items"></app-subcomp>
  `,
  styles: []
})
export class TestcompComponent implements OnInit {
  testcompnames: string[];
  surname: string;
  name = "Mrugesh";
  items: any[];
  posts: any[];


  constructor() { 
    this.surname = "Panchal";
    this.items = ['item1', 'item32', 'item', 3434];
    this.testcompnames = ['comp1', 'comp2', 'comp3'];
    
  }

  ngOnInit() {
  }

}
