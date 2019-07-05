import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/data');
  }
  postData(data) {
    return this.http.post('http://localhost:3000/data', data);
  }
  patchData(id, data) {
    return this.http.patch(`http://localhost:3000/data/${id}`, data);
  }
  removeData(id) {
    return this.http.delete(`http://localhost:3000/data/${id}`)
  }
}
