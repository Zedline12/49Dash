import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { NewCourseComponent } from './new-course/new-course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [NewCourseComponent, MyCoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
