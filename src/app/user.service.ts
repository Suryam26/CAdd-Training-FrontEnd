import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataUrl = 'https://jsonplaceholder.typicode.com/posts';  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<User>(url);
  }
}
