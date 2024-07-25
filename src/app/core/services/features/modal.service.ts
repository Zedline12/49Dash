import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public showModal = new BehaviorSubject<boolean>(false);
  constructor() {}

  openModal() {
    this.showModal.next(true);
  }

  closeModal() {
    this.showModal.next(false);
  }
}
