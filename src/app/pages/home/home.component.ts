import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.checkArticlesOverflow();
    // Recheck on window resize
    window.addEventListener('resize', () => {
      this.checkArticlesOverflow();
    });
  }

  navigateToPage(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  private checkArticlesOverflow() {
    const track = document.querySelector('.articles-track') as HTMLElement;
    const container = document.querySelector('.articles-container') as HTMLElement;
    
    if (track && container) {
      const trackWidth = track.scrollWidth;
      const containerWidth = container.clientWidth;
      
      if (trackWidth > containerWidth) {
        track.classList.add('animate');
      } else {
        track.classList.remove('animate');
      }
    }
  }
}
