import { Injectable } from '@angular/core';
import { Pool } from './pool';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  pools : Pool[] = [
    {id: 1, Name: 'High Park Outdoor Pool', Address: '1873 Bloor St W', City: 'Toronto', PostalCode: 'M6R 2Z3'},
    {id: 2, Name: 'Giovanni Caboto Outdoor Pool', Address: ' 1367 St Clair Ave W', City: 'Toronto', PostalCode: 'M6E 1C5'},
    {id: 3, Name: 'Sunnyside - Gus Ryder Outdoor Pool', Address: '1755 Lake Shore Blvd W', City: 'Toronto', PostalCode: 'M6S 5A3'},
  ];

  getPools(pools?: Pool) : Observable<Pool[]>{

    if(pools){
      let results: Pool[] = [];

      for(let p of this.pools){
        if( pools.Name.toLowerCase()=== p.Name.toLowerCase() ){
          results.push(p);
        }
      }
      return of(results);
    }
    return of(this.pools);
  }
  constructor() { }
}
