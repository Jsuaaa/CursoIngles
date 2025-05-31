import { Injectable } from '@angular/core';
import { SolarData } from '../../models/solar-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private sensorDataSubject = new BehaviorSubject<SolarData>({
    uvIndex: 7,
    temperature: 32,
    timestamp: new Date(),
    location: 'Montería'
  });

  sensorData$ = this.sensorDataSubject.asObservable();

  constructor() {
    this.simulateSensorData();
  }

  updateSensorData(newData: Partial<SolarData>): void {
    const currentData = this.sensorDataSubject.value;
    const updatedData: SolarData = {
      ...currentData,
      ...newData,
      timestamp: new Date() // actualiza la fecha cada vez
    };
    this.sensorDataSubject.next(updatedData);
  }

  private simulateSensorData(): void {
    setInterval(() => {
      const randomUvIndex = this.randomNumber(0, 11); // valores UV típicos
      const randomTemperature = this.randomNumber(25, 40); // valores de temperatura simulados

      this.updateSensorData({
        uvIndex: randomUvIndex,
        temperature: randomTemperature
      });
    }, 30000); // cada 30 segundos
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
