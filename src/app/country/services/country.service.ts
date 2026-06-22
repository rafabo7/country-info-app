import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RestCountry, RESTCountriesResponse } from '../interfaces/Rest-countries-response.interface';
import { catchError, map, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country-mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital(query: string) {
    query = query.toLowerCase()


    return this.http.get<RESTCountriesResponse>(`${environment.countriesUrl}/capitals?q=${query}`, {
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

}
