import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recommendation } from '../../models/recommendation';
import { SolarData } from '../../models/solar-data';
import { ApiService } from '../../services/api-service/api.service';
import { DataService } from '../../services/data-service/data.service';
import { LucideAngularModule, UmbrellaIcon } from 'lucide-angular';

@Component({
  selector: 'app-protection',
  imports: [LucideAngularModule],
  templateUrl: './protection.component.html',
  styleUrl: './protection.component.css'
})
export class ProtectionComponent implements OnChanges{

  // Datos del sensor
  @Input({required: true}) solarData!:SolarData;

  // Datos del servicio de datos
  @Input({required: true}) recommendations!:Recommendation;

  //Iconos
  readonly UmbrellaIcon = UmbrellaIcon;

  constructor(private apiService:ApiService, private dataService:DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['solarData']){
      this.solarData = changes['solarData'].currentValue;
    }

    if(changes['recommendations']){
      this.recommendations = changes['recommendations'].currentValue;
    }
  }


}
