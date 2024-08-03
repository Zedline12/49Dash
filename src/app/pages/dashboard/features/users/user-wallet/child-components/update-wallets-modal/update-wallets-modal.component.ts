import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersWalletsService } from 'app/core/services/features/users/usersWallets.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-wallets-modal',
  templateUrl: './update-wallets-modal.component.html',
  styleUrl: './update-wallets-modal.component.scss'
})
export class UpdateWalletsModalComponent implements OnInit ,OnDestroy{
  @Input() userId!:string
  walletsForm!: FormGroup;
  getUserWalletsSub!:Subscription
  constructor(private fb: FormBuilder,private service:UsersWalletsService,private tostr:ToastrService) {
    this.walletsForm = fb.group({
      balance: [ Validators.required],
      realAmount: [Validators.required],
      provider_cash_back: [Validators.required ],
      refund_storage: [Validators.required ],
      free_click_storage: [Validators.required],
    });
  }
  ngOnInit(): void {
    this.getUserWalletsSub = this.service.getUserWallets(this.userId).subscribe((wallets: any) => {
      const walletsData=wallets[0]
       this.walletsForm.setValue({
        balance: walletsData.balance,realAmount: walletsData.realAmount,provider_cash_back: walletsData.provider_cash_back,refund_storage: walletsData.refund_storage,free_click_storage: walletsData.free_click_storage})
    })
  }
  ngOnDestroy(): void {
    this.getUserWalletsSub.unsubscribe()
  }
  onSubmit() {
    if (this.walletsForm.valid) {
      this.service.updateUserWallets(this.userId, this.walletsForm.value)
      this.tostr.success('Wallets Updated Successfully')
    }
    else {
      alert("Please Fill Out the Form")
    }
  }
  activeModal = inject(NgbActiveModal);
}
