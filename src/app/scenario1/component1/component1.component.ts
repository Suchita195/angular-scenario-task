import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  //To display the value in console
  public logMessage(value)
  {
    console.log(value);
  }
  public successClass="text-success";
  public dangerClass="text-danger";
  constructor() { }

  ngOnInit() {
  }

}
