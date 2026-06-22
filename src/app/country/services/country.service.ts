import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RestCountry, RESTCountriesResponse } from '../interfaces/Rest-countries-response.interface';
import { map } from 'rxjs';
import { CountryMapper } from '../mappers/country-mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital( query:string ) {
    query = query.toLowerCase()


    return this.http.get<RESTCountriesResponse>(`${environment.countriesUrl}/capitals?q=${query}`, {
      headers: {
        'Authorization': `Bearer ${environment.countriesApiKey}`
      }
    }).pipe(
      map( res => CountryMapper.restCountriesMapper(res.data.objects)),
    )
  }

  // https://api.restcountries.com/countries/v5

}
