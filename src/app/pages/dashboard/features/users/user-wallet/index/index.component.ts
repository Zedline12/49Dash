import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'app/core/services/features/users/users.service';
import { UsersWalletsService } from 'app/core/services/features/users/usersWallets.service';
import { UpdateWalletsModalComponent } from '../child-components/update-wallets-modal/update-wallets-modal.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  constructor( private _NgbModal: NgbModal,public service: UsersWalletsService) {}
  ngOnInit(): void {
    this.service.getAllUsersWallets();
  }
  openWalletsModal(userId:string | undefined) {
    const modalref = this._NgbModal.open(UpdateWalletsModalComponent, {
      windowClass: 'modal-job-scrollable',
      size: 'xl',
    });
    modalref.componentInstance.userId = userId;
  }
}
