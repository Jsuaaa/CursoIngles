import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-info-square',
  imports: [NgClass],
  templateUrl: './info-square.component.html',
  styleUrl: './info-square.component.css'
})
export class InfoSquareComponent {

  squareInfo:any = [
    { range: "0-2", level: "Low", color: "bg-green-500", desc: "Minimal Risk" },
    { range: "3-5", level: "Moderate", color: "bg-yellow-500", desc: "Moderate Risk" },
    { range: "6-7", level: "High", color: "bg-orange-500", desc: "High Risk" },
    { range: "8-10", level: "Very High", color: "bg-red-500", desc: "Very High Risk" },
    { range: "11+", level: "Extreme", color: "bg-purple-500", desc: "Extreme Risk" },
]

}
