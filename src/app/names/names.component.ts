import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  name:string  = "oscar";
  nameList = ['john','judy','mark','kate','nancy'];
  constructor() { }

  ngOnInit() {
    
  }

}
