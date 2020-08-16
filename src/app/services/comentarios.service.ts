import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  getTodos() {
  	return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
