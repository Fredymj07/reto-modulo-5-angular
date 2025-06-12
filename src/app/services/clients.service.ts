import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  public baseUrl: string = '';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private _httpClient: HttpClient
  ) {
    this.baseUrl = 'http://127.0.0.1:3001/api'
  }

  getClientData(): Observable<any> {
    return this._httpClient.get(this.baseUrl + '/clients', this.httpOptions).pipe(retry(1), catchError(this.handleErrors));
  }

  handleErrors(error: any) {
    let msg: string = '';
    msg = error.error.message;
    return throwError(() => {
      return msg;
    });
  }
}
