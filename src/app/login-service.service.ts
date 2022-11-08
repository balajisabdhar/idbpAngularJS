import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlSerializer } from '@angular/router';
import { UserModel } from './user-model.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl="http://idbp-spring-boot-git-idbp-springboot.apps.webapp.cp.fyre.ibm.com/user/login"

 
  constructor(private httpClient: HttpClient) { }

  loginUser(userModel: UserModel):Observable<object>{
    
    console.log(userModel);
    return this.httpClient.post(`${this.baseUrl}`,userModel);

  }
}
