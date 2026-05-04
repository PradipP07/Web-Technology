import { CommonModule } from '@angular/common';
import { StudentServices } from './../services/student-services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = []; //store any type of data type values.

  constructor(private studentservices:StudentServices) {}

  ngOnInit(){
    this.students = this.studentservices.getStudents();
    
  }
}
