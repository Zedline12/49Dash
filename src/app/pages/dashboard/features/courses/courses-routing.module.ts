import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCourseComponent } from './new-course/new-course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {
    path: 'new-course',
    component:NewCourseComponent
  },
  {
    path: 'my-courses',
    component:MyCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
