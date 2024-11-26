import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {HeaderBannerComponent} from './header-banner/header-banner.component';
import {FooterComponent} from './footer/footer.component';
import {CatalogComponent} from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    HeaderBannerComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hmmh-Aufgabe-app';
}
