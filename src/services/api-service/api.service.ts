import { Injectable } from '@angular/core';
import { SolarData } from '../../models/solar-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private sensorDataSubject = new BehaviorSubject<SolarData>({
    uvIndex: 12,
    temperature: 32,
    timestamp: new Date(),
    location: 'Montería'
  });

  sensorData$ = this.sensorDataSubject.asObservable();

  constructor() { }

  updateSensorData(newData: Partial<SolarData>): void {
    const currentData = this.sensorDataSubject.value;
    const updatedData: SolarData = {
      ...currentData,
      ...newData,
      timestamp: new Date() // actualiza la fecha cada vez
    };
    this.sensorDataSubject.next(updatedData);
  }
}
