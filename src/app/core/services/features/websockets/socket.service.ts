import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server:', this.socket.id);
    });

    // Log when disconnected
    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    }); // Replace with your backend URL
  }

  // Listen for notifications

  onEvent(event: string): Observable<any> {
    return new Observable((observer) => {
      this.socket.off(event);
      this.socket.on(event, (data) => {
        observer.next(data);
      });
    });
  }

  // Emit an event (if needed)
  sendMessage(event: string, data: any) {
    this.socket.emit(event, data);
  }
  
  // Disconnect socket
  disconnect() {
    this.socket.disconnect();
  }
}
