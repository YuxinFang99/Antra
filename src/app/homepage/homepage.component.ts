import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  loadedFeature = 'home';
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
