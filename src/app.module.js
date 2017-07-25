import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactformComponent } from './components/contactform/contactform.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [NavigationComponent, ContactformComponent],
    bootstrap:[NavigationComponent, ContactformComponent]
})

export class AppModule {}