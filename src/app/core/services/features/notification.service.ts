import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

@Injectable()
export class NotificationService {
    constructor() { }
    public  onNotification():Observable<any> {
        return  of("")
    }

}