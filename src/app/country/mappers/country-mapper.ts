import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/Rest-countries-response.interface";

export class CountryMapper {
  static restCountryToCountry(restCountry: RestCountry): Country {

    return {
      areaKm: restCountry.area.kilometers,
      capital: {
        name: restCountry.capitals[0].name,
        coordinates: {
          lat: restCountry.capitals[0].coordinates.lat,
          lng: restCountry.capitals[0].coordinates.lng
        }
      },
      ccn3: restCountry.codes.ccn3,
      flag: restCountry.flag.url_png,
      icon: restCountry.flag.emoji,
      name: restCountry.names.translations['spa'].common ?? restCountry.names.common,
      population: restCountry.population
    }

  }

  static restCountriesMapper(restCountries: RestCountry[]): Country[] {

    return restCountries.map(this.restCountryToCountry)

  }
}
