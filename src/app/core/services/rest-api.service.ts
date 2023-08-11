import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from "../../global-component";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class restApiService {
  constructor(private http: HttpClient) { }
  /**
  * User Rest Api
  */
  // user list
  getUserData(query: any): Observable<any> {
    return this.http.get(GlobalComponent.API_URL + GlobalComponent.users + query, httpOptions);
  }

  // create user
  postUserData(user: any): Observable<any> {
    return this.http.post(GlobalComponent.API_URL + GlobalComponent.users, JSON.stringify(user), httpOptions);
  }

  // user detail
  getSingleUserData(id:any): Observable<any> { 
    return this.http.get(GlobalComponent.API_URL + GlobalComponent.userId + id, httpOptions);
  }

  // update user
  putUserData(user: any): Observable<any> {   
    return this.http.put(GlobalComponent.API_URL + GlobalComponent.userId + user.ID, JSON.stringify(user), httpOptions);
  }

  // delete user
  deleteUser(id:any): Observable<any> {   
    return this.http.delete(GlobalComponent.API_URL + GlobalComponent.userDelete + id, httpOptions);
  }
}
