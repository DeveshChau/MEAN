import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  firstName = "devesh"
  marks = 50
  per = 0.5
  birthday = new Date()
  num = 5
  constructor() { }

  ngOnInit() {
  }

}
