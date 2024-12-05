import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from 'app/core/services/features/courses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.scss',
})
export class NewCourseComponent implements OnInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  @ViewChild('oldPrice') oldPrice!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  form!: FormGroup;
  constructor(
    private readonly coursesService: CoursesService,
    private readonly toster: ToastrService,
    private fb: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  fileName = '';
  thumbnailUrl = '';
  file!: File;
  openFile() {
    document.getElementById('fileInp')?.click();
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      this.thumbnailUrl = URL.createObjectURL(this.file);
    }
  }
  submit(title: string, price: string,description:string, oldPrice: string) {
    this.coursesService
      .createCourse(this.file, title, price,description, oldPrice)
      .subscribe((res) => this.toster.success('Course submitted successfully'));
  }
}
