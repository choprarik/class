import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentRecord, Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  public student!: Student;

  public newPayment! : PaymentRecord;

  ngOnInit(): void {
    let id = this.router.url.split('students/')[1];
    this.studentService.getStudentById(id).subscribe((student: Student) => {
      this.student = student;
    });
  }

  initializeNewPayment() {
    this.newPayment = new PaymentRecord();
  }

}
