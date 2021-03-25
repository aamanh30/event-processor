import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { ClassesConfig } from './../../config/classes.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getClassesPageEventId();
    this.setEventId(id);
    this.setPageData(ClassesConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getClassesButtonData() {
    const formattedData = this.getFormattedData(ClassesConfig);
    return formattedData;
  }

}
