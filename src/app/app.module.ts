import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptureEventDirective } from './features/shared/directives/capture-event/capture-event.directive';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { HeaderComponent } from './features/shared/components/header/header.component';
import { FooterComponent } from './features/shared/components/footer/footer.component';
import { SidebarComponent } from './features/shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './features/shared/components/navbar/navbar.component';
import { MainLayoutComponent } from './features/shared/components/main-layout/main-layout.component';
import { FullLayoutComponent } from './features/shared/components/full-layout/full-layout.component';
import { SidebarLayoutComponent } from './features/shared/components/sidebar-layout/sidebar-layout.component';
import { ResultsPageComponent } from './features/results/pages/results-page/results-page.component';
import { AssignmentsPageComponent } from './features/assignments/pages/assignments-page/assignments-page.component';
import { GradebookPageComponent } from './features/gradebook/pages/gradebook-page/gradebook-page.component';
import { ContentPageComponent } from './features/content/pages/content-page/content-page.component';
import { OverviewPageComponent } from './features/overview/pages/overview-page/overview-page.component';
import { RosterPageComponent } from './features/roster/pages/roster-page/roster-page.component';
import { ClassesPageComponent } from './features/classes/pages/classes-page/classes-page.component';
import { ClassDropdownComponent } from './features/shared/components/class-dropdown/class-dropdown.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureEventDirective,
    DashboardPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    MainLayoutComponent,
    FullLayoutComponent,
    SidebarLayoutComponent,
    ResultsPageComponent,
    AssignmentsPageComponent,
    GradebookPageComponent,
    ContentPageComponent,
    OverviewPageComponent,
    RosterPageComponent,
    ClassesPageComponent,
    ClassDropdownComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
