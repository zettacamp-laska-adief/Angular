import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './mentor';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  private apiUrl = '../../assets/mentor.json';
  constructor(private http: HttpClient) {}

  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(this.apiUrl);
  }
}
