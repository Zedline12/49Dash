import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUserCard } from 'app/core/models/user/IUserCard';
import { of } from 'rxjs';

@Component({
  selector: 'users-list-modal',
  templateUrl: './users-list-modal.component.html',
  styleUrl: './users-list-modal.component.scss',
})
export class UsersListModalComponent {
  users!: IUserCard[];
  searchKeys: string[] = ['firstName', 'phone', 'email'];
  activeModal = inject(NgbActiveModal);
  filteredItems!: any;
  constructor(private router: Router) {}
  navigate(userId: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users', userId]);
      this.activeModal.close('Close click')
    });
  }
  onFilter(event: any) {
    this.filteredItems = event;
  }
}
