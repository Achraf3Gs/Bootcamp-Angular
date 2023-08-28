import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  students:string[]=["Nawfel","Mohammed","Mariem","Siwer","Achraf"];
  constructor() { }
  
  getStudent():string[]{
    return this.students;
  }
}
