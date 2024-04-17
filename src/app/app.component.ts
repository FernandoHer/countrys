import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HomePageComponent,
        AboutPageComponent,
        SidebarComponent,
        HttpClientModule
    ]
})
export class AppComponent {
  title = 'countryApp';
}
