// Display numbers using loop
document.write("<h2>Experiment No.1</h2>");
document.write("---Activity 1---<br>");
let num;

for(num=0;num<=10;num++){
    document.write(num+"<br>");
}


// Check Odd or Even
document.write("---Activity 2---<br>");
let num1=20;

if(num1%2==0){
    document.write("Num is Even<br>");
}
else{
    document.write("Num is Odd<br>");
}


// Check Pass or Fail
document.write("---Activity 3---<br>");
let M1=40;
let M2=60;
let M3=80;
let M4=70;
let M5=65;
let total=500

let sum=M1+M2+M3+M4+M5;
let avg=sum*100/500;

if(avg>=35){
    document.write("Student is Pass<br>");
}
else{
    document.write("Student is Fail<br>");
}

// Display Student Information

document.write("---Activity 4---<br>");
let Name="Pradeep Patil";
let PRN="23UAM093";
let Branch="AIML";
let CourseName="Web Technology";
let EmailId="patilpradeep0101@gmail.com";

document.write("Name=",Name+"<br>");
document.write("PRN=",PRN+"<br>");
document.write("Branch Name=",Branch+"<br>");
document.write("Course Name=",CourseName+"<br>");
document.write("Email Id=",EmailId+"<br>");