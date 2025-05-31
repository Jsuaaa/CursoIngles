import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recommendation } from '../../models/recommendation';
import { ApiService } from '../../services/api-service/api.service';
import { DataService } from '../../services/data-service/data.service';
import { LucideAngularModule, ActivityIcon } from 'lucide-angular';

@Component({
  selector: 'app-activities',
  imports: [LucideAngularModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnChanges{

  // Datos del servicio de datos
  @Input({required: true}) recommendations!:Recommendation;

  //Iconos
  readonly ActivityIcon = ActivityIcon;

  constructor(private apiService:ApiService, private dataService:DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['recommendations']){
      this.recommendations = changes['recommendations'].currentValue;
    }
  }

}
