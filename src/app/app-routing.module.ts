import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinCourseComponent } from './join-course/join-course.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ProJectCoreComponent } from './pro-ject-core/pro-ject-core.component';
import { TermsConditionsonComponent } from './terms-conditionson/terms-conditionson.component';
import { StudentOrInstractorComponent } from './student-or-instractor/student-or-instractor.component';
import { GradeComponent } from './grade/grade.component';
import { RequestComponent } from './request/request.component';
import { InstuctorHomePageComponent } from './instuctor-home-page/instuctor-home-page.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { InstractorTableComponent } from './instractor-table/instractor-table.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { AllAcceptedRequestsComponent } from './all-accepted-requests/all-accepted-requests.component';
import { AllPenddingStudentRequestComponent } from './all-pendding-student-request/all-pendding-student-request.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';



const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: ProJectCoreComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'joinUs', component: JoinCourseComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cancel', component: CancellationPolicyComponent },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'asidebar', component: AsideBarComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:studentID', component: CoursesComponent },
  { path: "termcConditions", component: TermsConditionsonComponent },
  { path: "studentorinstractor", component: StudentOrInstractorComponent },
  { path: "grades", component: GradeComponent },
  { path: "request", component: RequestComponent },
  { path: "inshomepage", component: InstuctorHomePageComponent },
  { path: "addcourse", component: AddCoursesComponent },
  { path: "instractortable", component: InstractorTableComponent },
  { path: "addsubject", component: AddSubjectComponent },
  { path: "editubject/:id", component: AddSubjectComponent },
  {path:"showrequests",component:AllRequestsComponent},
  {path:"acceptedequests",component:AllAcceptedRequestsComponent},
  {path:"penddingstudentrequest",component:AllPenddingStudentRequestComponent},
  {path:"acceptedrequests",component:AllAcceptedRequestsComponent},
  { path: "subjects", component: SubjectsComponent },
  { path: "StudentProfile", component: StudentProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
