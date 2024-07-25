import { Component, OnInit } from '@angular/core';
import { AppMangerService } from '../../../../core/services/features/appManger.service';
import { AuthService } from '../../../../core/services/core/auth.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './appManger.component.html',
  styleUrl: './appManger.component.scss',
})
export class AppMangerComponent implements OnInit {
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
