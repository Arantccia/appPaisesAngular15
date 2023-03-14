import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Country } from '../interfaces/pais-interface'

@Injectable({
  providedIn: 'root'
})
export class PaisService {
   private apiUrl = 'https://restcountries.com/v2' 

  get httparams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flags,population')
  } 
  constructor(private http:HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url, {params: this.httparams});
    // otra manera de trabajar el error
     /*  .pipe(
        // el of transforma su contenido en un nuevo osbservable
        // estamos atrapando el error y devolviendo un array bacio 
        catchError(err => of([]))
      ) */
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>(url, {params: this.httparams});
  }

  getPaisPorId(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country>{
   // const url2 =` https://restcountries.com/v3.1/region/${region}`
   
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country>(url, {params: this.httparams});
  }
}
