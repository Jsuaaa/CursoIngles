import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { DataService } from '../../services/data-service/data.service';
import { UvLevel } from '../../models/uv-level';
import { SolarData } from '../../models/solar-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-fast-info',
  imports: [NgClass],
  templateUrl: './fast-info.component.html',
  styleUrl: './fast-info.component.css'
})
export class FastInfoComponent implements OnChanges{

  // Datos del sensor
  @Input({required: true}) solarData!:SolarData;

  // Datos del servicio de datos
  @Input({required: true}) uvLevel!:UvLevel;

  constructor(private apiService:ApiService, private dataService:DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['solarData']){
      this.solarData = changes['solarData'].currentValue;
    }

    if(changes['uvLevel']){
      this.uvLevel = changes['uvLevel'].currentValue;
    }
  }

}
