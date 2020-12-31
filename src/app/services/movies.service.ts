import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=c7256108&s=";
  public bSubject = new BehaviorSubject('');
  share = [];
  constructor(private http: HttpClient) { }

  getMovies(searchInput): Observable<any> {
    return this.http.get(this.api_url+searchInput).pipe(debounceTime(1000));
  }

  sendValue(value:any) {
    this.bSubject.next(value);
  }

  getValue(): Observable<any> {
    return this.bSubject.asObservable();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('role') === '1';
  }

  sendData(val) {
    this.share = val;
  }

  getData() {
    return this.share;
  }
}
