import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { CoordenateListComponent } from './coordenate-list/coordenate-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapsComponent,
    CoordenateListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
