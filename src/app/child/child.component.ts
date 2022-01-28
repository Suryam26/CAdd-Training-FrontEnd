import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() users?: User[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(id: number): void {
    const navigationUrl: string[] = ['/detail'];
    navigationUrl.push(id.toString());
    this.router.navigate(navigationUrl);
  }
}
