import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcomp',
  template: `
    <p>
      subcomp Works! <strong>{{subcompname}}</strong>
    </p>

    <input type="text" #myInput/>
    <button name="btn" (click)="clickme(myInput)">Send</button>
    
    <ng-content></ng-content>
  `,
  styles: []
})
export class SubcompComponent implements OnInit {
  subcompname: string;

  // @Input() namecomp2:string;

  constructor() {
    this.subcompname = "Subc component data!!!!";
    // this.namecomp2 = "@Input data";
  }

  clickme(inputData) {
    console.log(inputData.value);
  }



  ngOnInit() {
  }

}
