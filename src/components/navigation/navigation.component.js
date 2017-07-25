import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'dist/html/navigation.html'
})

export class NavigationComponent {
    name = 'katron franklin';
    test(){
      alert('hello me')
    }
}