import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() sentence: string = 'This is how to Angular'

  constructor() { }

  ngOnInit() {
  }

  changeText() {
    this.sentence = 'my text is now changed'
  }

}
