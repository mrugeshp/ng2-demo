import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  template: `
    <p>
      form-demo Works!
    </p>

    <form [formGroup]="myForm" (ngSubmit)="onSubmitData(myForm.value)" >
      
      <input type="text" #fname name="fname" [formControl]="myForm.controls['fname']" />
      <p *ngIf="!myForm.controls['fname'].valid && myForm.controls['fname'].touched" class="alert-danger ng-error">Please enter First Name  {{myForm.controls['fname'].value.length}}</p>
      <p *ngIf="!myForm.controls['fname'].valid && myForm.controls['fname'].value.length < 3" class="alert-warning">Enter more than 3 characters</p>


      <input type="text" name="lname" [formControl]="myForm.controls['lname']" />

      <input type="text" name="email" [formControl]="myForm.controls['email']" />

      <input type="radio" name="gender" value="Male">Male
      <input type="radio" name="gender" value="Femaile">Female

      <input type="submit" value="Submit">
    </form>



  `,
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  myForm: FormGroup;
  email: FormControl;

  constructor(private fb: FormBuilder) { 
   this.myForm = fb.group({
     'fname':['', [Validators.required, Validators.minLength(3)]],
     'lname': ['', Validators.required],
     'email': []
   })

   

  }

  onSubmitData(val) {
    console.log(val);
    console.log('Form submitted');
  }

  ngOnInit() {
  }

}
