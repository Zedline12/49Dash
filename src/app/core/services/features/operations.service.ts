import { Injectable } from "@angular/core";
// import {  SocketService } from "./websockets/socket.service";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OperationsService{
    constructor(private readonly httpClient:HttpClient){}
     onOperationsUpdates():Observable<any> {
        return of("")
    }
     getActiveOperations():Observable<any> {
        return this.httpClient.get("http://localhost:3000/reservations/operations");
    }
}