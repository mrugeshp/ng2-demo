import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-junethree',
  template: `
    <p>
      junethree Works!
    </p>

    <input type="test" [value]="myService.getMessage()" (keyup)="myService.setMessage($event.target.value)" />

     <p>  {{myService.getMessage()}}</p>

      <ul>
        <li *ngFor="let user of users | async">
         <a class="text-danger" href="#" (click)="getBlogData(user.id)">{{user.name}}'s Blogs</a> <strong>{{user.company.name}}</strong>   
        </li>
      </ul>

    
        <blockquote *ngFor="let blog of blogs | async">
        <p>Blog Id: {{blog.id}}</p> 
        <small>{{blog.title}}</small>
        </blockquote>
     

  `,
  styleUrls: ['./junethree.css']
})
export class JunethreeComponent implements OnInit {
  users;
  blogs;

/*  title = 'app works!';
  names: string[];
/*  person: Person;
  person: Person = {
    name: "dssss",
    age: 25
  };
  constructor() {
    this.names = ['name1', 'name2'];
    // this.person.name = "MNP";
   //  this.person.age = 32;
  }
  onUpdate(val) {
    console.log(val);
  }*/

  /*** june 3 */
  constructor(private myService:FirstService) {
    myService.setMessage("My name from APP");
    this.users = myService.getUsers();

  }

  getBlogData(uid) {
    console.log(uid+'dddddd');
    this.blogs = this.myService.getBlogs(uid);
  }

  ngOnInit() {
  }

}
