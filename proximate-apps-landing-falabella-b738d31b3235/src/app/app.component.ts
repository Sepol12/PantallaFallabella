import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private elementRef: ElementRef) { }
  
  scrollToDestination() {
    const destination = this.elementRef.nativeElement.querySelector('#enviarConocerBeneficios');
    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
