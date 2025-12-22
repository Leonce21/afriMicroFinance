import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  posts = [
    { 
      title: '5 Tips for Managing Seasonal Cash Flow', 
      category: 'Business Tips', 
      date: 'Oct 12, 2023', 
      img: 'https://picsum.photos/id/1084/400/250',
      excerpt: 'Farming is seasonal. Learn how to stretch your income during the dry months with these proven strategies.'
    },
    { 
      title: 'Understanding Interest Rates: A Guide', 
      category: 'Education', 
      date: 'Sep 28, 2023', 
      img: 'https://picsum.photos/id/1068/400/250',
      excerpt: 'What does "flat rate" vs "reducing balance" mean? We break down the jargon so you borrow smart.'
    },
    { 
      title: 'Success Story: From Stall to Supermarket', 
      category: 'Community', 
      date: 'Aug 15, 2023', 
      img: 'https://picsum.photos/id/1070/400/250',
      excerpt: 'Meet Sarah, who started with a $50 loan and now employs 10 people in her local community.'
    },
    { 
      title: 'Mobile Money Security Basics', 
      category: 'Tech', 
      date: 'Nov 01, 2023', 
      img: 'https://picsum.photos/id/60/400/250',
      excerpt: 'Keep your MPESA and bank accounts safe from fraudsters with these simple PIN security tips.'
    }
  ];
}