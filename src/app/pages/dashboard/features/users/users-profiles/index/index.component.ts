import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core/services/features/users/users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  constructor(public service: UserService) { }
    ngOnInit(): void {
      this.service.getUsersProfiles();
    }
}
