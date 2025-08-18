import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private readonly apiUrl = 'https://localhost:7021/api/User';

  constructor(private readonly httpClient: HttpClient) { }

  loginUser(loginUser: LoginUser): Observable<any>{
    return this.httpClient.post(this.apiUrl+"/login", loginUser);
  }
}
