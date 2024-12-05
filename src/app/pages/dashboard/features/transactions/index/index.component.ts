import { Component, OnInit } from '@angular/core';
import { IPayment } from 'app/core/interfaces/stripe/IPayment';
import { StripeService } from 'app/core/services/features/stripe.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  payments!:IPayment[]
  constructor(private stripeService:StripeService){}
  ngOnInit(): void {
    this.stripeService.getPayments().subscribe((x:any) => {
      this.payments = x.data
       })
   }  
}
