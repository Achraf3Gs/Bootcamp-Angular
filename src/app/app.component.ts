import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMS Project';

  formateur:string="Amine Mezghiche";
  bootcamp:string[]=["springboot","angule","agile","devops"];
  estHybride:boolean=true;
  prix:number=450;
}
