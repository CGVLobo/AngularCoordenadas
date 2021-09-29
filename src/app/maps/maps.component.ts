import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public currentDate = new Date();
  public lat: any;
  public lng: any;
  public ipAddress: string = "Sin Registrar";
  public currentDateFormat: any;
  //public dataSource:any=[];

  constructor(private restService: RestService) { }


  ngOnInit(): void {
    let month = this.currentDate.getMonth() + 1;
    this.currentDateFormat = this.currentDate.getFullYear() + "-" + month + "-" + this.currentDate.getDate() + " " + this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + ":" + this.currentDate.getSeconds();
    this.registerCoordenate()
  }

  registerCoordenate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.restService.getIpClient().subscribe((res: any) => {
            this.ipAddress = res.ip;
            this.restService.post("http://localhost:1337/coordenate", {
              lat: this.lat,
              lng: this.lng,
              registerDate: this.currentDateFormat,
              ipAddress: this.ipAddress
            }).subscribe(rest => { })
          })
        }
      })
    }
  }


}
