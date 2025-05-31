import { Injectable } from '@angular/core';
import { Recommendation } from '../../models/recommendation';
import { UvLevel } from '../../models/uv-level';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUVLevel(uvIndex: number): UvLevel {
    if (uvIndex <= 2) return { level: "Bajo", color: "bg-green-500", textColor: "text-green-700", borderColor:"border-green-500"};
    if (uvIndex <= 5) return { level: "Moderado", color: "bg-yellow-500", textColor: "text-yellow-500", borderColor:"border-yellow-500" };
    if (uvIndex <= 7) return { level: "Alto", color: "bg-orange-500", textColor: "text-orange-700", borderColor:"border-orange-500" };
    if (uvIndex <= 10) return { level: "Muy Alto", color: "bg-red-500", textColor: "text-red-700", borderColor:"border-red-500" };
    return { level: "Extremo", color: "bg-purple-500", textColor: "text-purple-700", borderColor:"border-purple-500" };
  }

  getRecommendations(uvIndex: number): Recommendation {
    if (uvIndex <= 2) {
      return {
        safety: "Es seguro estar al aire libre sin protección especial",
        protection: ["Gafas de sol opcionales", "Protector solar si tienes piel sensible"],
        activities: ["Caminatas largas", "Deportes al aire libre", "Picnic en el parque", "Jardinería", "Ciclismo", "Correr"]
      };
    } else if (uvIndex <= 5) {
      return {
        safety: "Protección recomendada durante las horas pico",
        protection: ["Protector solar SPF 30+", "Gafas de sol", "Sombrero"],
        activities: ["Deportes matutinos", "Caminatas cortas", "Actividades en la sombra", "Natación", "Tenis temprano", "Golf matutino"]
      };
    } else if (uvIndex <= 7) {
      return {
        safety: "Protección necesaria, evitar exposición prolongada",
        protection: ["Protector solar SPF 50+", "Ropa de manga larga", "Sombrero de ala ancha", "Gafas de sol UV400"],
        activities: ["Actividades bajo techo", "Natación cubierta", "Gimnasio", "Museos", "Centros comerciales", "Lectura en casa"]
      };
    } else if (uvIndex <= 10) {
      return {
        safety: "Evitar salir entre 10 AM y 4 PM",
        protection: ["Protector solar SPF 50+ cada 2 horas", "Ropa protectora", "Sombrero y gafas", "Buscar sombra constantemente"],
        activities: ["Actividades de interior", "Cine", "Bibliotecas", "Cocinar", "Videojuegos", "Trabajo desde casa"]
      };
    } else {
      return {
        safety: "¡PELIGRO! Evitar toda exposición solar",
        protection: ["NO salir al sol", "Permanecer en interiores", "Si es necesario salir: protección máxima", "Protector solar SPF 50+ cada hora"],
        activities: ["Quedarse en casa", "Actividades de interior únicamente", "Leer", "Ver películas", "Cocinar", "Descansar"]
      };
    }
  }
}
