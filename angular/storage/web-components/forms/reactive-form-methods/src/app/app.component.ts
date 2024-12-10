import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form-methods';
}
