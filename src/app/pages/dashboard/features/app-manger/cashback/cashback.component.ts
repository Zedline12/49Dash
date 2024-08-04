import { Component } from '@angular/core';
import { AuthService } from 'app/core/services/core/auth.service';
import { AppMangerService } from 'app/core/services/features/appManger.service';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrl: './cashback.component.scss'
})
export class CashbackComponent {
  constructor(
    public appMangerServ: AppMangerService,
    public auth: AuthService
  ) {}
  async ngOnInit(): Promise<void> {
  this.appMangerServ.getCashBacks()
  }
  onSubmit(form: any) {
    this.appMangerServ.updateAppManger(form);
  }
}
