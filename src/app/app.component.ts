import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  name:string = '';
  age:number;
  found:boolean = false;
  constructor(private httpClient:HttpClient){}
  onNameKeyUp(event:any){
    this.name = event.target.value;
  }

  getProfile(){
    //console.log(this.name);

    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`).subscribe(
      (data:any[])=>{
         if(data.length){
            this.age = data[0].age;
            this.found = true;
         }
      }
    );
    
  }

  postProfile(){
    //console.log(this.name);

    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
      name:'oscar',
      age:18
    })
    .subscribe(
      (data:any)=>{
         console.log(data);
      }
    );
    
  }

}
