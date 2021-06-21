import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3000/'

  public getStudentsList() : Observable<Student[]> {
    return new Observable((observer) => {
      this.http.get(this.URL + 'students/').subscribe((res: any) => {
        let student: Student[] = res;
        observer.next(student);
        observer.complete();
      }, (err) => {
        observer.error(err);
      });
    });
  }

  public getStudentById(id: string) : Observable<Student> {
    return new Observable((observer) => {
      this.http.get(this.URL + 'students/' + id).subscribe((res: any) => {
        let student: Student = res;
        observer.next(student);
        observer.complete();
      }, (err) => {
        observer.error(err);
      });
    });
  }

  public updateStudent(student: Student) : Observable<Student> {
    return new Observable((observer) => {
      this.http.put(this.URL + 'students/' + student._id, student).subscribe((res: any) => {
        let student: Student = res;
        observer.next(student);
        observer.complete();
      }, (err) => {
        observer.error(err);
      });
    });
  }
}
