import { Injectable } from '@angular/core';
import { SolarData } from '../../models/solar-data';
import { BehaviorSubject, switchMap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private sensorDataSubject = new BehaviorSubject<SolarData>({
    uvIndex: 0,
    temperature: 0,
    timestamp: "Hoy",
    location: 'Desconocida'
  });

  sensorData$ = this.sensorDataSubject.asObservable();

  private apiUrl = 'http://localhost:8080/api/sensor/latest'; // tu backend real

  constructor(private http: HttpClient) {
    this.fetchSensorDataPeriodically();
  }

  private fetchSensorDataPeriodically(): void {
    // Ejecuta cada 30 segundos
    timer(0, 30000).pipe(
      switchMap(() => this.http.get<SolarData>(this.apiUrl))
    ).subscribe({
      next: (data) => {
        console.log(data);
        this.sensorDataSubject.next(data)},
      error: (err) => console.error('Error al obtener datos del sensor:', err)
    });
  }
}
