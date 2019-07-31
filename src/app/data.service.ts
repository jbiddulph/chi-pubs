import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pub} from './models/pub.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'http://www.mypubspace.com/pubsmobile/worthingpubs.php';

  constructor(private http: HttpClient) { }

  getPubs() {
    return this.http.get<Pub[]>(this.apiURL);
  }
}
