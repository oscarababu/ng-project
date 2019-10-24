import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  @Input() names;
  @Output() eventFromOuter = new EventEmitter<string>()
  name:string = '';
  constructor() { }

  ngOnInit() {
  }
  eventFromInner(passed:string){
    this.name = passed;
    this.eventFromOuter.emit(this.name);
  }

}
