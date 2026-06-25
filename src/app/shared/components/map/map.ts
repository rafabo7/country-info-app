import { AfterViewInit, ChangeDetectionStrategy, Component, input } from '@angular/core';
import * as L from 'leaflet';
import { Coordinates } from '../../../country/interfaces/Rest-countries-response.interface';

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

  constructor(){}

  ngAfterViewInit(): void {
    this.initMap()

  }

// [ 39.8282, -98.5795 ]
}
