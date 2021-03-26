import { RosterPageComponent } from './features/roster/pages/roster-page/roster-page.component';
import { ResultsPageComponent } from './features/results/pages/results-page/results-page.component';
import { OverviewPageComponent } from './features/overview/pages/overview-page/overview-page.component';
import { GradebookPageComponent } from './features/gradebook/pages/gradebook-page/gradebook-page.component';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { ContentPageComponent } from './features/content/pages/content-page/content-page.component';
import { AssignmentsPageComponent } from './features/assignments/pages/assignments-page/assignments-page.component';
import { ClassesPageComponent } from './features/classes/pages/classes-page/classes-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/shared/components/main-layout/main-layout.component';
import { PagesComponent } from './features/test/pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'assignments',
        component: AssignmentsPageComponent
      },
      {
        path: 'classes',
        component: ClassesPageComponent
      },
      {
        path: 'content',
        component: ContentPageComponent
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent
      },
      {
        path: 'classes',
        component: ClassesPageComponent
      },
      {
        path: 'gradebook',
        component: GradebookPageComponent
      },
      {
        path: 'overview',
        component: OverviewPageComponent
      },
      {
        path: 'results',
        component: ResultsPageComponent
      },
      {
        path: 'roster',
        component: RosterPageComponent
      },
      {
        path: 'test',
        component: PagesComponent
      },
      {
        path: '',
        redirectTo: 'content',
        pathMatch: 'full'
      }    
    ]
  },
  {
    path: '**',
    redirectTo: 'content',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
