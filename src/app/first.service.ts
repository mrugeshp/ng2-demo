import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirstService {
  message = "Hello Mrugesh";

  constructor(private http: Http) { 
    // this.message = message;
  }

  getMessage() {
    return this.message;
  }

  setMessage(msg) {
    this.message = msg;
  }

  getUsers() {
   return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
  //  return this.http.get('https://jsonplaceholder.typicode.com/users').map(res =>setTimeout(() => resolve(this.getHeroes()), 2000));

  }

  getBlogs(userId) {
    console.log('user id '+ userId);
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+userId).map(res => res.json());
  }

}
