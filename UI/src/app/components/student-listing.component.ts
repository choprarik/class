import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.scss']
})
export class StudentListingComponent implements OnInit {

  public filters: {
    name: string,
    class: string,
    batch: string
  } = {
    name: '',
    class: '',
    batch: ''
  };

  public studentList : Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentsList().subscribe((students: Student[]) => {
      this.studentList = students;
    });
  }
}
