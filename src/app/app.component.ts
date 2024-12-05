import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HealthService } from './core/services/features/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '49dashboard';
  constructor(private serv: HealthService) { }
   ngOnInit(): void {
    
   }
  
 
}
