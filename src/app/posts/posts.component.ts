import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    /*promises and obersrvables workes with Asynchronous or non bloking objects. 
    If data is not avialble imedeatly there is an delay 10ms 0r 100ms 
    we dont know during this time main block exeuting the code should not blocked.when the result is ready it notify 
    */
      .subscribe(response => {
        this.posts= response.json();
      })
  }

}
