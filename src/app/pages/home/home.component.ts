import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('articlesTrack', { static: false }) articlesTrack!: ElementRef;
  
  canScrollPrev = false;
  canScrollNext = false;
  
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.checkArticlesOverflow();
    this.updateNavigationState();
    
    // Recheck on window resize
    window.addEventListener('resize', () => {
      this.checkArticlesOverflow();
      this.updateNavigationState();
    });
  }

  navigateToPage(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  scrollArticles(direction: 'prev' | 'next') {
    const track = this.articlesTrack.nativeElement;
    const container = track.parentElement;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of container width
    
    if (direction === 'next') {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    
    // Update navigation state after scroll
    setTimeout(() => {
      this.updateNavigationState();
    }, 300);
  }

  private checkArticlesOverflow() {
    const track = document.querySelector('.articles-track') as HTMLElement;
    const container = document.querySelector('.articles-container') as HTMLElement;
    
    if (track && container) {
      const trackWidth = track.scrollWidth;
      const containerWidth = container.clientWidth;
      
      // Remove auto-animation class
      track.classList.remove('animate');
    }
  }

  private updateNavigationState() {
    const track = this.articlesTrack?.nativeElement;
    if (!track) return;
    
    this.canScrollPrev = track.scrollLeft > 0;
    this.canScrollNext = track.scrollLeft < (track.scrollWidth - track.clientWidth);
  }
}
