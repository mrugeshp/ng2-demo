import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

import { FirstService } from './first.service';

import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { SubcompComponent } from './subcomp/subcomp.component';
import { Comp3Component } from './comp3/comp3.component';
import { JunethreeComponent } from './junethree/junethree.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { JunefourComponent } from './junefour/junefour.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormMaterialComponent } from './form-material/form-material.component';


@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    SubcompComponent,
    Comp3Component,
    JunethreeComponent,
    MaincompComponent,
    JunefourComponent,
    FormDemoComponent,
    FormMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
