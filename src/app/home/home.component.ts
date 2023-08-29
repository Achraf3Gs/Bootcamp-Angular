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
  logo: string="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/162457202_236798584810704_5686462020238208630_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=psLccvmlCmEAX96SRQ7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfATblVSsJJJWG-zy_XNjy7EuK__dPTvVCmLuxJ9Hig0Nw&oe=65147C18";
  mesPosts: Post[] = [];
  etudiants:string[]=[];
  nom:string="mon composant";
  dispalyed:boolean=true;




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
  display(){
    this.dispalyed=!this.dispalyed;
  }
}

