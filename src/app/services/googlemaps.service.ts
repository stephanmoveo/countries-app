import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {



  constructor(public http: HttpClient) { }

  map = {} as any
  google: [] = [] as any
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  initMap() {
    const work = { lat: 32.064, lng: 34.771 };
    const home = { lat: 32.049, lng: 34.757 };
    this.map = new google.maps.Map(document.getElementById('map') as any, {
      center: work,
      zoom: 16,
      mapId: '7bcf017bee09d454',
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
      }
    });
    
    this.directionsRenderer.setMap(this.map)
    const moveoMarker = new google.maps.Marker({
      position: work,
      map: this.map,
    });
    const styledMapType = new google.maps.StyledMapType(
      [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#c9b2a6" }],
        }
      ],
      { name: "Styled Map" }
    )
    this.map.mapTypes.set("styled_map", styledMapType);
    const homemMarker = new google.maps.Marker({
      position: home,
      map: this.map,
    });
    const center = { lat: 50.064192, lng: -130.605469 };
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById("pac-input") as HTMLInputElement;

    const autocomplete = new google.maps.places.Autocomplete(input);
    const southwest = { lat: 5.6108, lng: 136.589326 };
    const northeast = { lat: 61.179287, lng: 2.64325 };
    const newBounds = new google.maps.LatLngBounds(southwest, northeast);

    autocomplete.setBounds(newBounds);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById(
      "infowindow-content"
    ) as HTMLElement;

    infowindow.setContent(infowindowContent);

    autocomplete.addListener("place_changed", () => {

      const marker = new google.maps.Marker({
        map: this.map,
        anchorPoint: new google.maps.Point(0, -29),
      });
      infowindow.close();
      marker.setVisible(false);

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      let address = "";

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
          "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
          "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
          "",
        ].join(" ");
      }
      infowindowContent.children['place-icon' as string].src = place.icon;
      infowindowContent.children["place-name" as string].textContent = place.name;
      infowindowContent.children["place-address" as any].textContent = address;
      infowindow.open(this.map, marker);
    });
  }
  calcRoute() {
    const work = { lat: 32.064, lng: 34.771 };
    const home = { lat: 32.049, lng: 34.757 };
    var request = {
      origin: home,
      destination: work,
      travelMode: 'DRIVING'
    };
    let renderDirec = this.directionsRenderer
    this.directionsService.route(request as any, function (result, status) {
      if (status == 'OK') {
        renderDirec.setDirections(result);
      }
    });
  }
}
