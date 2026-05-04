import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServices {
  students = [
    { name: 'PP', age:20},
    { name: 'ss', age :22}
  ];

getStudents(){
  return this.students;
}
}