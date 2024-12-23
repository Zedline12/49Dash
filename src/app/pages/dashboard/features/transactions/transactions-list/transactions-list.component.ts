import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatedData } from 'app/core/interfaces/paginated-data.interface';
import { IPayment } from 'app/core/interfaces/stripe/IPayment';
import { StripeService } from 'app/core/services/features/stripe.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss',
})
export class TransactionsListComponent implements OnInit {
  paginatedpayments!: PaginatedData<IPayment>;
  pageEvent!: PageEvent;
  datasource!: null;
  pageIndex!: number;
  pageSize!: number;
  length!: number;
  constructor(private stripeService: StripeService) {}
  ngOnInit(): void {
    this.getPaginatedPayments(1, 5);
  }
  test(event: PageEvent): PageEvent {
    const { pageIndex, pageSize } = event;
    this.getPaginatedPayments(pageIndex + 1, pageSize);
    return event;
  }
  getPaginatedPayments(page: number, limit: number) {
    this.stripeService.getPayments(page, limit).subscribe((x: any) => {
      this.paginatedpayments = x.data;
      this.length = x.data.totalDocs;
      this.pageIndex = page - 1;
      this.pageSize = limit;
    });
  }
}
