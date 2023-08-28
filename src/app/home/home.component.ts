import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { PostsService } from '../services/posts.service';
import { Post } from '../Models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mesPosts: Post[] = [];
  etudiants:string[]=[];
  nom:string="mon composant";
 constructor(private service:UsersService, private servicePosts:PostsService){
  //console.log("Constructeur");
 }

 ngOnInit():void{
  //console.log("ngOnInit");
  //console.log (this.service.getStudent());
  this.etudiants= (this.service.getStudent());
  this.servicePosts.getPosts().subscribe(
    data =>{
      this.mesPosts=data;
    }
  );
  }
}

