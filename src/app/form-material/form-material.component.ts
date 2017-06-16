import { Component, OnInit } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdCalendar} from '@angular/material';

@Component({
  selector: 'app-form-material',
  template: `
    <p>
      form
    </p>  
  <button md-button>Click me!</button> 

<md-checkbox>Check me!</md-checkbox>

  <md-radio-group>
  <md-radio-button value="1">Option 1</md-radio-button>
  <md-radio-button value="2">Option 2</md-radio-button>
</md-radio-group>
  `,  
  styles: []
})
export class FormMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
