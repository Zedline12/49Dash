import { Component } from '@angular/core';
import { AuthService } from 'app/core/services/core/auth.service';
import { AppMangerService } from 'app/core/services/features/appManger.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent {
  constructor(
    public appMangerServ: AppMangerService,
    public auth: AuthService
  ) {}
  async ngOnInit(): Promise<void> {
  this.appMangerServ.getStorages()
  }
  onSubmit(form: any) {
    this.appMangerServ.updateStorages(form);
  }
}
