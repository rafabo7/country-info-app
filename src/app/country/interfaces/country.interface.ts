export interface Country {
  alphaCode: string
  geoInfo: GeoInfo,
  capital: Capital
  ccn3: string,
  flag: Flag,
  goverment: string
  icon: string,
  languages: string[]
  name: string,
  nameOfficial: string
  nativeName: NativeName
  population: number,
  region: string,
  subregion: string
}

interface Capital {
  name: string,
  coordinates: Coordinates
}

interface Coordinates {
  lat: number,
  lng: number
}

interface NativeName {
  nativeCommon: string,
  nativeOfficial: string
}

interface Flag {
  flagUrl: string,
  flagDescription: string
}

interface GeoInfo {
  mainCoordinates: Coordinates,
  areaKm: number,
  landlocked: boolean
}
