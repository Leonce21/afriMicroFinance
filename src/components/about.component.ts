import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  history = [
    { year: '2015', title: 'Foundation', desc: 'Founded in Nairobi with a mission to serve unbanked farmers.' },
    { year: '2018', title: 'Expansion', desc: 'Opened branches in Uganda and Tanzania. Reached 10k customers.' },
    { year: '2020', title: 'Digital Shift', desc: 'Launched mobile lending app to support remote communities during the pandemic.' },
    { year: '2023', title: 'Pan-African', desc: 'Operations expanded to West Africa (Nigeria, Ghana). Reached 50k loans.' }
  ];

  team = [
    { name: 'Dr. Sarah Mbeki', role: 'CEO', bio: 'Former economist at the World Bank with 15 years in microfinance.', img: 'https://picsum.photos/id/1011/150/150' },
    { name: 'John Osei', role: 'CTO', bio: 'Tech innovator passionate about fintech solutions for rural areas.', img: 'https://picsum.photos/id/1005/150/150' },
    { name: 'Amina Diop', role: 'Head of Community', bio: 'Expert in community development and grassroots mobilization.', img: 'https://picsum.photos/id/1027/150/150' }
  ];
}