import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUserResult } from '../models/random-users-result';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {
  constructor(private http: HttpClient) { }
  getRandomUsers(): Observable<RandomUserResult> {
    return this.http.get<RandomUserResult>(environment.randomUsersBaseApiUrl);
  }
}
