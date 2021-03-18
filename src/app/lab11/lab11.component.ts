import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab11',
  templateUrl: './lab11.component.html',
  styleUrls: ['./lab11.component.css']
})
export class Lab11Component implements OnInit {
  items=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
