import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() entries: [string, any][] = [];
  @Input() labelStyle: any = {};
  @Input() backgroundColor: string = 'primary';
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('myform') form!: any;
  bool = true;
  constructor() {}
  ngOnInit(): void {}
  onFormSubmit(form: NgForm): void {
     this.onSubmit.emit(form.value);
  }
  checkbox(key: string, value: any) {
    this.form.value[key]=value.checked
  }
  itemType(item: any) {
    return typeof item;
  }
  getChangedProperties(form: any) {
    const formEnteries = Object.entries(form.value);
    formEnteries.forEach((entry: [string, any], index: number) => {
      this.entries.find((e) => e[0] === entry[0])?.[1] == entry[1]
        ? delete form.value[entry[0]]
        : null;
    });
    return form;
  }
}
