import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Student } from '../services/student/student';
import { StudentList } from '../student-list/student-list';

export const routes: Routes = [
    {path: 'Admin', component: Admin},
    {path: 'StudentList', component: StudentList}
];
