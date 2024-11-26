import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products = [
      { name: 'Hoodie', price: 34.90 , imageUrl: 'Kapuzenpullover.png' },
      { name: 'Rundhalspullover-Creme', price: 55.90 , imageUrl: 'Rundhals_Pulli.png' },
      { name: 'Sweater-Grau', price: 19.95 , imageUrl: 'Sweater_Gray.png' },
      { name: 'CELINEN', price: 49.90 , imageUrl: 'Hose_CELINE.png' },
      { name: 'Wesley-Jeans', price: 49.90 , imageUrl: 'Wesley_Jeans.png' },
      { name: 'Kurt Jeans aus Trail Wash Denim', price: 49.90  , imageUrl: 'Kurt_Jeans.png' }

    ];
}
