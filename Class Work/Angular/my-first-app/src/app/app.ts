import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
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
