import { Component } from '@angular/core';

@Component({
  selector: 'contactform',
  templateUrl: 'dist/html/contactform.html'
})

export class ContactformComponent {
    name = 'katron franklin';
    test(){
      alert('hello me')
    }
}