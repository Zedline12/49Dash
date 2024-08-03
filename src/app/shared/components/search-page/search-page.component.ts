import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent implements OnInit {
  @Input() items!: any;
  @Input() keys!: Array<string>;
  @Output() filteredItems: EventEmitter<any> = new EventEmitter();
  @Input() itemsLength!: number;
  @Input() sortKeys: Array<string>=[];
  ngOnInit(): void {
    console.log(this.keys)
  }
  onFilter(event: Array<any>) {
    this.itemsLength = event.length;
    this.filteredItems.emit(event);
  }
  onSortSelect(value: any) {
    console.log(value);
  }
}
