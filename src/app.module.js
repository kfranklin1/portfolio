import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser

import { NavigationComponent } from './components/navigation/navigation.component';
import { contactformComponent } from './components/contactform/contactform.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [NavigationComponent,contactformComponent],
    bootstrap:[NavigationComponent,contactformComponent]
})

export class AppModule {}