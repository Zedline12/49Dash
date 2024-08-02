import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HealthService } from './core/services/features/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = '49dashboard';
  constructor(private serv: HealthService) { }
   ngOnInit(): void {
    
   }
  SubCategories: string[] = [
    '62c8badf8e28a58a3edf5865',
    '62c8bae08e28a58a3edf5867',
    '62c8bae18e28a58a3edf5869',
    '62c8bae28e28a58a3edf586b',
    '62c8bae38e28a58a3edf586d',
    '62c8bae48e28a58a3edf586f',
    '62c8bae68e28a58a3edf5871',
    '62c8bae78e28a58a3edf5873',
    '62c8bae88e28a58a3edf5875',
    '62c8bae98e28a58a3edf5877',
    '62c8bae98e28a58a3edf5879',
    '62c8baea8e28a58a3edf587b',
    '62c8baeb8e28a58a3edf587d',
    '62c8baed8e28a58a3edf587f',
    '62c8baed8e28a58a3edf5881',
    '62c8baef8e28a58a3edf5883',
    '62c8baf08e28a58a3edf5885',
    '62c8baf08e28a58a3edf5887',
    '62c8baf18e28a58a3edf5889',
    '62c8baf28e28a58a3edf588b',
    '62c8baf38e28a58a3edf588d',
    '62c8baf58e28a58a3edf588f',
    '62c8baf58e28a58a3edf5891',
    '62c8baf78e28a58a3edf5893',
    '62c8baf88e28a58a3edf5895',
    '62c8baf88e28a58a3edf5897',
    '62c8bafa8e28a58a3edf5899'
  ];
  go() {
    for (let i = 0; i < this.SubCategories.length; i++) {
      this.serv.post('/health/history-patient-booking', this.SubCategories[i]);
    }
  }
}
