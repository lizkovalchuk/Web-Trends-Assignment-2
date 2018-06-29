import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pool } from './pool';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  public errorMessage: string;

  apiUrl: string = 'http://lkquartet.com/assignmentAPI.php?api_key=pool-info';

  getPool(name: string) : Observable<Pool>{
    return this.http.get<Pool>(this.apiUrl + '&name=${name}');
  }

  getPools() : Observable<Pool[]>{
    return this.http.get<Pool[]>(this.apiUrl);
  }

  constructor(
    private http: HttpClient
  ) { }
}
