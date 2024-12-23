import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { StripeService } from 'app/core/services/features/stripe.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
@NgModule({
  declarations: [TransactionsListComponent],
  imports: [CommonModule, TransactionsRoutingModule, MatPaginatorModule],
  exports:[MatPaginatorModule],
  providers: [StripeService],
})
export class TransactionsModule {}
