import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges{

  @Input({required:true}) title:string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title'] && changes['title'].currentValue){
      this.title = changes['title'].currentValue;
    }
  }

}
