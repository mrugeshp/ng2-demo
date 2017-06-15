import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp3',
  template: `
    <p>
      comp3 Works!
    </p>

    <!-- <input type="text" [(ngModel)]="message" #ipuntval>
    {{message}}
    <input type="text" [(ngModel)]="person">
-->

<!-- <input type="text" [(ngModel)]="user.name" #ipuntval> -->


<input type="text" [value]="user.name" #ipuntval>
{{user.name}} -- {{user.age}}
    <button (click)="update.emit({text:inputval, data: message, me: person, b: comp3Val1})">Button</button>



  `,
  styles: []
})
export class Comp3Component implements OnInit {
  @Input() user:any={};
  @Input() message: string;
  @Output() update = new EventEmitter();
  comp3Val1: string;

  constructor() { 
    this.message = "Test Message";
    this.comp3Val1 = "Comp3 val";
    this.user.name = "Mrugesh";
  }


  ngOnInit() {
  }

}
