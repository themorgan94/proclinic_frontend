import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalComponent } from "../../global-component";
import { TokenStorageService } from "./token-storage.service"

const AUTH_API = GlobalComponent.AUTH_API;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {
    constructor(private tokenStorageService: TokenStorageService, private http: HttpClient) {
    }


    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, userName: string, password: string, firstName: string, lastName: string) {
        // Register Api
        return this.http.post(AUTH_API + 'signup', {
            email,
            userName,
            password,
            firstName,
            lastName
          }, httpOptions);
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return this.http.post(AUTH_API + 'login', {
            email,
            password
          }, httpOptions);
    }

    forgetPassword(email: string) {
        return this.http.post(AUTH_API + 'forget-password', {
            email
          }, httpOptions);
    }

    resetPassword(password: string, token: string) {
        return this.http.post(AUTH_API + 'reset-password', {
            password,
            token
          }, httpOptions);
    }

    refreshToken() {
        return this.http.post(AUTH_API + 'refresh-token', {
            refreshToken: localStorage.getItem('refreshToken')
        })
    }

    /**
     * Logout the user
     */
    logout() {
        this.tokenStorageService.logout()
    }
}

