export interface Country {
  alphaCode: string
  areaKm: number,
  capital: Capital
  ccn3: string,
  flag: string,
  icon: string,
  name: string,
  population: number,
}

interface Capital {
  name: string,
  coordinates: Coordinates
}

interface Coordinates {
  lat: number,
  lng: number
}
