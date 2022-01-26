import { Injectable } from '@angular/core';
import { Detail } from './details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private detailsPath = '../assets/data.json';

  constructor(private http: HttpClient) { }

  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.detailsPath);
  }
}
