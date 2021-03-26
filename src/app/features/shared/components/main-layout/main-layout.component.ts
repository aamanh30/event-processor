import { ClassService } from './../../services/class/class.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as getStudentId } from 'uuid';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  classList$: Observable<any[]>;
  studentIds = [];
  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classList$ = this.classService.getClassList();
    this.setStudentIds();
  }

  setStudentIds() {
    for(let i = 0; i < 10; i++) {
      const studentId = getStudentId();
      this.studentIds.push(studentId);
    }
  }
}
