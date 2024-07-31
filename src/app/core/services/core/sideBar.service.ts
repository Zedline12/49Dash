import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  public showSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public toggleSideBar() {
    this.showSideBar.next(!this.showSideBar.value);
  }
}
