import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .hero-bg {
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
    }
  `]
})
export class HomeComponent {
  services = [
    { 
      title: 'Small Business Loans', 
      // Lucide: Store
      icon: 'm2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7 M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8 M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4 M2 7h20 M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7', 
      desc: 'Flexible capital for traders and artisans.' 
    },
    { 
      title: 'Agri-Finance', 
      // Lucide: Sprout
      icon: 'M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z', 
      desc: 'Season-based loans for farmers and collectives.' 
    },
    { 
      title: 'Group Savings', 
      // Lucide: Landmark
      icon: 'M3 22v-8 M6 22v-8 M9 22v-8 M12 22v-8 M15 22v-8 M18 22v-8 M21 22v-8 M2 10h20 M4 6h16 M3 22h18 M12 2L2 6v4h20V6z', 
      desc: 'Secure community savings (Chamas) with high interest.' 
    }
  ];

  testimonials = [
    { name: 'Amara Okafor', role: 'Textile Merchant, Lagos', text: 'AfriMicro helped me expand my stall to a full shop. The interest rates are fair and the process was dignified.', image: 'https://picsum.photos/id/338/100/100' },
    { name: 'David Kimani', role: 'Coffee Farmer, Nyeri', text: 'With the agri-loan, I bought better fertilizers. My harvest doubled this season. They truly understand farmers.', image: 'https://picsum.photos/id/64/100/100' },
    { name: 'Grace Dlamini', role: 'Bakery Owner, Soweto', text: 'The financial literacy training was eye-opening. Now I manage my cash flow better and my business is stable.', image: 'https://picsum.photos/id/129/100/100' }
  ];
}