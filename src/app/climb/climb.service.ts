import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ClimbingGym } from './climb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimbService {

//   gyms: ClimbingGym[] = [
//     {id: 1, name: 'Jolo Rock Climbing', address: '205 humber college blvd', accessible: true, bouldering: true, level: 'beginner'},
//     {id: 2, name: 'Mojo Climbers', address: '211 quiet place lane', accessible: true, bouldering: true, level: 'intermediate'},
//     {id: 3, name: 'Pride Comes Before the Fall Climbing', address: '666 Devils Place Lane', accessible: false, bouldering: true, level: 'advanced'}
// ];

apiUrl: string = 'http://matthewweber.ca/api/restapi.php?api_key=666';

getClimbingGyms(): Observable<ClimbingGym[]>{
  return this.http.get<ClimbingGym[]>(this.apiUrl);
}

getClimbingDetails(id: number): Observable<ClimbingGym[]>{
  return this.http.get<ClimbingGym[]>(this.apiUrl + `&id=${id}`);
}

constructor(
  private http: HttpClient
) { }

}