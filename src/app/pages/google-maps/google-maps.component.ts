import { Component, OnInit } from '@angular/core';
import { GooglemapsService } from 'src/app/services/googlemaps.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements OnInit {

  constructor(public mapservice: GooglemapsService) { }

  ngOnInit(): void {
    this.mapservice.initMap()
  }
}
