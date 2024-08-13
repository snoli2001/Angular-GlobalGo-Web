import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-dealers-stores-map',
  standalone: true,
  templateUrl: './dealers-stores-map.component.html',
  styleUrls: ['./dealers-stores-map.component.css']
})
export class DealersStoresMapComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
    this.loadMap();
  }
  
  loadMap(): void {
    const loader = new Loader({
      apiKey: 'AIzaSyDzUuTacD6GSOy4we-VNDhuO3IXmgcXmx4', // Reemplaza con tu clave API
      version: 'weekly',
    });
    
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }
}
