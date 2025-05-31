import { Injectable } from '@angular/core';
import { Recommendation } from '../../models/recommendation';
import { UvLevel } from '../../models/uv-level';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUVLevel(uvIndex: number): UvLevel {
    if (uvIndex <= 2) {
      return {
        level: "Low",
        color: "bg-green-700",
        textColor: "text-green-700",
        borderColor: "border-green-500"
      };
    }
    if (uvIndex <= 5) {
      return {
        level: "Moderate",
        color: "bg-yellow-500",
        textColor: "text-yellow-500",
        borderColor: "border-yellow-500"
      };
    }
    if (uvIndex <= 7) {
      return {
        level: "High",
        color: "bg-orange-700",
        textColor: "text-orange-700",
        borderColor: "border-orange-500"
      };
    }
    if (uvIndex <= 10) {
      return {
        level: "Very High",
        color: "bg-red-700",
        textColor: "text-red-700",
        borderColor: "border-red-500"
      };
    }
    return {
      level: "Extreme",
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-500"
    };
  }

  getRecommendations(uvIndex: number): Recommendation {
    if (uvIndex <= 2) {
      return {
        safety: "It is safe to be outdoors without special protection",
        protection: ["Optional sunglasses", "Sunscreen if you have sensitive skin"],
        activities: ["Long walks", "Outdoor sports", "Picnic in the park", "Gardening", "Cycling", "Running"]
      };
    } else if (uvIndex <= 5) {
      return {
        safety: "Protection recommended during peak hours",
        protection: ["SPF 30+ sunscreen", "Sunglasses", "Hat"],
        activities: ["Morning sports", "Short walks", "Shaded activities", "Swimming", "Early tennis", "Morning golf"]
      };
    } else if (uvIndex <= 7) {
      return {
        safety: "Protection necessary, avoid prolonged exposure",
        protection: ["SPF 50+ sunscreen", "Long-sleeved clothing", "Wide-brim hat", "UV400 sunglasses"],
        activities: ["Indoor activities", "Indoor swimming", "Gym", "Museums", "Shopping malls", "Reading at home"]
      };
    } else if (uvIndex <= 10) {
      return {
        safety: "Avoid going out between 10 AM and 4 PM",
        protection: ["SPF 50+ sunscreen every 2 hours", "Protective clothing", "Hat and sunglasses", "Seek shade constantly"],
        activities: ["Indoor activities", "Cinema", "Libraries", "Cooking", "Video games", "Work from home"]
      };
    } else {
      return {
        safety: "DANGER! Avoid all sun exposure",
        protection: ["Do NOT go out in the sun", "Stay indoors", "If necessary to go out: maximum protection", "SPF 50+ sunscreen every hour"],
        activities: ["Stay at home", "Indoor-only activities", "Reading", "Watching movies", "Cooking", "Resting"]
      };
    }
  }
}
