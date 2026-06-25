import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/Rest-countries-response.interface";

export class CountryMapper {
  static restCountryToCountry(restCountry: RestCountry): Country {
    // get 3 letter official language code
    const firstLanguage = restCountry.languages[0].iso639_3

    return {
      alphaCode: restCountry.codes.alpha_3,
      geoInfo: {
        mainCoordinates: restCountry.coordinates,
        areaKm: restCountry.area.kilometers,
        landlocked: restCountry.landlocked
      },
      capital: {
        name: restCountry.capitals[0].name,
        coordinates: {
          lat: restCountry.capitals[0].coordinates.lat,
          lng: restCountry.capitals[0].coordinates.lng
        }
      },
      ccn3: restCountry.codes.ccn3,
      flag: {
        flagUrl: restCountry.flag.url_png,
        flagDescription: restCountry.flag.description
      },
      goverment: restCountry.government_type,
      icon: restCountry.flag.emoji,
      languages: restCountry.languages.map( item => item.name),
      name: restCountry.names.common,
      nameOfficial: restCountry.names.official,
      nativeName: {
        nativeCommon: restCountry.names.native[firstLanguage].common,
        nativeOfficial: restCountry.names.native[firstLanguage].official
      },
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion,
    }

  }

  static restCountriesMapper(restCountries: RestCountry[]): Country[] {

    return restCountries.map(this.restCountryToCountry)

  }
}
