import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { Detail } from '../details';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  detials: Detail[] = [];
  sortBy: string = "";
  type: string= "";

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.fetchDetails()
  }

  fetchDetails(): void {
    this.detailService.getDetails().subscribe(details => this.detials = details);
  }

  updateSort(sortBy: string): void {
    this.sortBy = sortBy;
    this.sortData();
  }

  updateType(type: string): void {
    this.type = type;
    this.sortData();
  }

  sortData(): void{
    if (this.sortBy == "name") {
      if (this.type == "asce") {
        this.detials.sort((a: any, b:any) => (a.name > b.name) ? 1 : -1)
      }
      if (this.type == "desc") {
        this.detials.sort((a: any, b:any) => (a.name < b.name) ? 1 : -1)
      }
    }

    if (this.sortBy == "age") {
      if (this.type == "asce") {
        this.detials.sort((a: any, b:any) => (new Date(b.birthDate).valueOf()) - (new Date(a.birthDate).valueOf()) )
      }
      if (this.type == "desc") {
        this.detials.sort((a: any, b:any) => (new Date(a.birthDate).valueOf()) - (new Date(b.birthDate).valueOf()) )
      }
    }
  }

}
