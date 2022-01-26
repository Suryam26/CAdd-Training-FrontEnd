import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Output() updateSort = new EventEmitter<string>();
  @Output() updateType = new EventEmitter<string>();

  sortBy: string = "";
  type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeSortBy(): void {
    this.updateSort.emit(this.sortBy);
  }

  changeType(): void {
    this.updateType.emit(this.type);
  }
}
