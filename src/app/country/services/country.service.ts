import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RestCountry, RESTCountriesResponse } from '../interfaces/Rest-countries-response.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country-mapper';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase()

    return this.http.get<RESTCountriesResponse>(`${environment.countriesUrl}/capitals?q=${query}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.countriesApiKey}`
        }
      }).pipe(
        map(res => CountryMapper.restCountriesMapper(res.data.objects)),
        catchError(error => {
          console.log('RestCountries API error:', error)
          // review this deprecated throwError
          return throwError((error: Error) => new Error('RestCountries API error', error))
        })
      )
  }

  searchByCountryName(query: string): Observable<Country[]> {
    query.toLocaleLowerCase()
    return this.http.get<RESTCountriesResponse>(`${environment.countriesUrl}/names.common?q=${query}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.countriesApiKey}`
        }
      }).pipe(
        map(res => CountryMapper.restCountriesMapper(res.data.objects)),
        catchError(error => {
          console.log('RestCountries API error:', error)
          // review this deprecated throwError
          return throwError((error: Error) => new Error('RestCountries API error', error))
        })
      )
  }

  searchByAlphaCode(query: string) {
    query.toLocaleLowerCase()
    return this.http.get<RESTCountriesResponse>(`${environment.countriesUrl}/codes.alpha_3?q=${query}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.countriesApiKey}`
        }
      }).pipe(
        map(res => CountryMapper.restCountriesMapper(res.data.objects)),
        map( countries => countries.at(0) ),
        catchError(error => {
          console.log(`No se encontró un pais con código ${query}`, error)
          // review this deprecated throwError
          return throwError((error: Error) => new Error('RestCountries API error', error))
        })
      )
  }

}
