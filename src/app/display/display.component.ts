import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../details';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() detials?: Detail[];

  constructor() { }

  ngOnInit(): void {
  }
}
