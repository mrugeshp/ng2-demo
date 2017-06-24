import { Directive, Component, OnInit, HostBinding, Inject, Injectable, ElementRef, Input, HostListener } from '@angular/core';

@Injectable() 
export class TrackingService {
  logs = [];
  saveLogs(trackingEvent) {
    console.log('Save logs');
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}


@Directive({
  selector: '[myFirstDir]',
})
export class myFirstDir {
  /*@HostBinding() get innerText() {
    return 'hello mrugesh';
  }*/

  @Input() myFirstDir;

  @HostListener('click') onclick() {
    this.trackingSer.saveLogs({event: 'click', button: this.myFirstDir});
    console.log('button clicked!!');
  }

  constructor(private trackingSer: TrackingService) {

  }

/*
  @Input() message;

  myDirectPro = "Directive text"
  constructor (private el: ElementRef) {

  }

  ngOnInit() {
    console.log(this.myDirectPro);
    this.el.nativeElement.innerHTML = '<span>' + this.myDirectPro + '</span>';
    // this.el.nativeElement.innerHTML = '<span>' + this.message + '</span>';
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
*/
}

@Component({
  selector: 'app-junefour',
  template: `
    <p>
      junefour Works!
    </p>

   
    <button myFirstDir="One"> One </button>
    <button myFirstDir="Two"> Two </button>
    <button myFirstDir="three"> Three </button>

  `,
  styles: []
})
export class JunefourComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

}
