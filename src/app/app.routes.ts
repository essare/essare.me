import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'certifications', component: CertificationsComponent, title: 'Certifications' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },

  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'project/:slug', component: ProjectDetailComponent, title: 'Project' },
  { path: '**', redirectTo: '' }
];
