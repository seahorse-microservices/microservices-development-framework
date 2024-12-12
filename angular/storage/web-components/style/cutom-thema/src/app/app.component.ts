import { Component } from '@angular/core';
import { ThemeService } from './theme.service';



@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <h1>Angular SCSS Themes</h1>
      <p>The current theme dynamically changes using SCSS variables!</p>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </div>
  `,
  styles: [
    `
    .container {
      background-color: var(--background);
      color: var(--text);
      padding: 2rem;
      text-align: center;
      border: 1px solid var(--primary);
      border-radius: 8px;
    }

    button {
      background-color: var(--primary);
      color: var(--text);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: var(--accent);
    }
    `
  ]
})
export class AppComponent {

  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  // toggleTheme(): void {
  //   const newTheme = this.themeService.getTheme() === 'light-theme' ? 'dark-theme' : 'light-theme';
  //   this.themeService.setTheme(newTheme);
  //   console.log('Theme toggled to:', newTheme); // Debugging log
  // }


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    console.log('Applying theme:', themeClass);
    document.body.className = themeClass;
  }
}
