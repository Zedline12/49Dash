import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements AfterViewInit {
  @Input() items: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  //use the first keys in the array
  @Input() keys!: string[];
  @Output() filteredItems: EventEmitter<any> = new EventEmitter();
  currentKey!: string;
  @ViewChild('inp') inp!: ElementRef;
  ngAfterViewInit(): void {
    this.items.pipe(tap((items) => this.filteredItems.emit(items))).subscribe();
    this.currentKey = this.keys[0];
  }
  search(value: any) {
    console.log(value);
    const filteredItems = this.items.value.filter((item: any) => {
      if (item[this.currentKey]) {
        return item[this.currentKey].indexOf(value) !== -1;
      } else {
        return false;
      }
    });
    this.filteredItems.emit(filteredItems);
  }
  onSelect(event: any) {
    this.currentKey = (event.target as any).value;
    this.search('');
    this.inp.nativeElement.value = '';
  }
}
