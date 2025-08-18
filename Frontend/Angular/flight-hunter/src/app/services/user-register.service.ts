import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private readonly apiUrl = 'https://localhost:7021/api/User';

  constructor(private readonly httpClient : HttpClient) {}

  registerUser(userData: User) : Observable<any>{
    return this.httpClient.post(this.apiUrl, userData);
  }
}
