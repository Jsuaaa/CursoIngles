import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-header',
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnChanges{

  @Input({required:true}) title:string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title'] && changes['title'].currentValue){
      this.title = changes['title'].currentValue;
    }
  }


}
