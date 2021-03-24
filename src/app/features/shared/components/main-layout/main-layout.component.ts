import { ClassService } from './../../services/class/class.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  classList$: Observable<any[]>;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classList$ = this.classService.getClassList();
  }

}
