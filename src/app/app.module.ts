import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { JoinCourseComponent } from './join-course/join-course.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { ProJectCoreComponent } from './pro-ject-core/pro-ject-core.component';
import { TermsConditionsonComponent } from './terms-conditionson/terms-conditionson.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { InstractorTableComponent } from './instractor-table/instractor-table.component';
import { StudentOrInstractorComponent } from './student-or-instractor/student-or-instractor.component';
import { GradeComponent } from './grade/grade.component';
import { RequestComponent } from './request/request.component';
import { InstuctorHomePageComponent } from './instuctor-home-page/instuctor-home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { AllAcceptedRequestsComponent } from './all-accepted-requests/all-accepted-requests.component';
import { CoursesRequestComponent } from './courses-request/courses-request.component';
import { ConsultingRequestComponent } from './consulting-request/consulting-request.component';
import { RequewstDetailsComponent } from './requewst-details/requewst-details.component';
import { AllAcceptedStudentRequestComponent } from './all-accepted-student-request/all-accepted-student-request.component';
import { AllPenddingStudentRequestComponent } from './all-pendding-student-request/all-pendding-student-request.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { UniveristyRequestComponent } from './univeristy-request/univeristy-request.component';
import { AllUniveristyRequestsComponent } from './all-univeristy-requests/all-univeristy-requests.component';
import { AllinstructorSubjectComponent } from './allinstructor-subject/allinstructor-subject.component';
import { CommonModule, DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    JoinCourseComponent,
    HomePageComponent,
    ProfileComponent,
    PrivacyPolicyComponent,
    CancellationPolicyComponent,
    DashBoardComponent,
    AsideBarComponent,
    CoursesComponent,
    LoginComponent,
    ProJectCoreComponent,
    TermsConditionsonComponent,
    AddCoursesComponent,
    InstractorTableComponent,
    StudentOrInstractorComponent,
    GradeComponent,
    RequestComponent,
    InstuctorHomePageComponent,
    AddSubjectComponent,
    SubjectsComponent,
    AllRequestsComponent,
    AllAcceptedRequestsComponent,
    CoursesRequestComponent,
    ConsultingRequestComponent,
    RequewstDetailsComponent,
    AllAcceptedStudentRequestComponent,
    AllPenddingStudentRequestComponent,
    StudentProfileComponent,
    UniveristyRequestComponent,
    AllUniveristyRequestsComponent,
    AllinstructorSubjectComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],


  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
