import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LucideAngularModule, SunIcon, CloudSunIcon, CloudIcon, RefreshCwIcon, ClockIcon, EyeIcon, ThermometerIcon, ShieldIcon } from 'lucide-angular';
import { DataService } from '../../services/data-service/data.service';
import { ApiService } from '../../services/api-service/api.service';
import { SolarData } from '../../models/solar-data';
import { Recommendation } from '../../models/recommendation';
import { UvLevel } from '../../models/uv-level';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-actual-state',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './actual-state.component.html',
  styleUrl: './actual-state.component.css'
})
export class ActualStateComponent implements OnChanges{

  // Datos del sensor
  @Input({required: true}) solarData!:SolarData;

  // Datos del servicio de datos
  @Input({required: true}) recommendations!:Recommendation;
  @Input({required: true}) uvLevel!:UvLevel;

  // Icons
  readonly SunIcon = SunIcon;
  readonly CloudSunIcon = CloudSunIcon;
  readonly CloudIcon = CloudIcon;
  readonly RefreshCwIcon = RefreshCwIcon;
  readonly ClockIcon = ClockIcon;
  readonly EyeIcon = EyeIcon;
  readonly ThermometerIcon = ThermometerIcon;
  readonly ShieldIcon = ShieldIcon;

  constructor(private dataService:DataService, private apiService: ApiService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['solarData']){
      this.solarData = changes['solarData'].currentValue;
    }

    if(changes['recommendations']){
      this.recommendations = changes['recommendations'].currentValue;
    }

    if(changes['uvLevel']){
      this.uvLevel = changes['uvLevel'].currentValue;
    }
  }

  getWeatherIcon(): {icon:any, color:string} {
    if (!this.solarData) return {icon:this.CloudIcon, color:'text-gray-500'};
    if (this.solarData.uvIndex <= 2) return {icon:this.CloudIcon, color:'text-gray-500'};
    if (this.solarData.uvIndex <= 5) return {icon:this.CloudSunIcon, color:'text-yellow-500'};
    return {icon:this.SunIcon, color:'text-orange-500'};
  }

}
