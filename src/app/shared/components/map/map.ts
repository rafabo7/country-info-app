import { AfterViewInit, ChangeDetectionStrategy, Component, input } from '@angular/core';
import * as L from 'leaflet';
import { Coordinates } from '../../../country/interfaces/Rest-countries-response.interface';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  styles: `
    .map-container {

      margin-top: 30px;
      width: 66%;
      padding: 16px
    }

    .map-frame {
        border: 2px solid black;
        height: 100%;
      }

    #map {
        height: 400px;
    }`,
  imports: [],
  templateUrl: './map.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMap implements AfterViewInit {

  private map!: L.Map

  public capitalCoordinates = input.required<Coordinates>()

  private initMap() {
    this.map = L.map('map', {
      center: this.capitalCoordinates(),
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap()
    const marker = L.marker(this.capitalCoordinates())
    marker.addTo(this.map)

  }
}
