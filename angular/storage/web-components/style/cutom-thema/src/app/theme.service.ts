// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: string = 'light-theme';

  // constructor(rendererFactory: RendererFactory2) {
  //   this.renderer = rendererFactory.createRenderer(null, null);
  // }

    // Load the theme on application start
    constructor(rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
      const savedTheme = localStorage.getItem('theme') || 'light-theme';
      this.setTheme(savedTheme);
    }

  // setTheme(theme: string): void {
  //   const body = document.body;
  //   this.renderer.removeClass(body, this.currentTheme);
  //   this.renderer.addClass(body, theme);
  //   this.currentTheme = theme;
  // }

    // Update setTheme to persist the theme
    setTheme(theme: string): void {
      const body = document.body;
      this.renderer.removeClass(body, this.currentTheme);
      this.renderer.addClass(body, theme);
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    }

    getTheme(): string {
    return this.currentTheme;
  }



  

}
