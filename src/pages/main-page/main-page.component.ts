import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActualStateComponent } from '../../components/actual-state/actual-state.component';
import { FastInfoComponent } from '../../components/fast-info/fast-info.component';

// Services
import { ApiService } from '../../services/api-service/api.service';
import { DataService } from '../../services/data-service/data.service';
import { SolarData } from '../../models/solar-data';
import { Recommendation } from '../../models/recommendation';
import { UvLevel } from '../../models/uv-level';
import { ProtectionComponent } from '../../components/protection/protection.component';

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, ActualStateComponent, FastInfoComponent, ProtectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{

    // Datos del sensor
    solarData!: SolarData;

    // Datos del servicio de datos
    recommendations!: Recommendation;
    uvLevel!:UvLevel;

  constructor(private apiService:ApiService, private dataService:DataService){}

  ngOnInit(): void {
    this.apiService.sensorData$.subscribe((data) => {
      this.solarData = data;
      this.recommendations = this.dataService.getRecommendations(this.solarData.uvIndex);
      this.uvLevel = this.dataService.getUVLevel(this.solarData.uvIndex);
    });
  }

}
