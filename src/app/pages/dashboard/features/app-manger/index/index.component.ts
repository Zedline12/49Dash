import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/core/auth.service';
import { AppMangerService } from 'app/core/services/features/appManger.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  constructor(
    public appMangerServ: AppMangerService,
    public auth: AuthService
  ) {}
  async ngOnInit(): Promise<void> {
  this.appMangerServ.getAllAppManger()
  }
  onSubmit(form: any) {
    this.appMangerServ.updateAppManger(form);
  }
}
