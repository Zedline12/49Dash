import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { IndexComponent } from './index/index.component';
import { StripeService } from 'app/core/services/features/stripe.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, TransactionsRoutingModule],
  providers: [StripeService],
})
export class TransactionsModule {}
