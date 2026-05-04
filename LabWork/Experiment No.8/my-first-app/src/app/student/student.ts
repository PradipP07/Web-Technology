import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name : string = "Pradip";
  PRN : string = "23UAM093";
  dept : string = "AIML";

  changeName(){
    if(this.name === "Pradip"){
      this.name = "Pradip Patil";
    }
    else{
      this.name = "Pradip";
    }
    
  }
  showAlert() {
    alert('Student details updated successfully!');
  }

  cityArr :string[] = ['Pune','Sangli','Kolhapur'];
}

