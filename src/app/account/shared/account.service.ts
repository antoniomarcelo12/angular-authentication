import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './clients.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://api.elcoma.com.br/api/visits'
  clientData = []
  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${this.baseUrl}/login`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    } else {
      return false;
    }
  }
  
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + '/get_clients')
  }

  readClientInfo(id: string): Observable<[]> {
    return this.http.get<[]>(this.baseUrl + `/get_client_data/${id}`)
  }
}
 