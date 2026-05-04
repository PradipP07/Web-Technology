import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = 'Angular';
  age: number = 0;
  decision: boolean = false;
  data: any = null;
  protected readonly title = signal('my-first-app');
}
