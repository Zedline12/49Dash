import { Component, OnInit } from '@angular/core';
import { IHomePageData } from 'app/core/interfaces/IHomePageData';
import { DataService } from 'app/core/services/features/Data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
  homePageData!:IHomePageData
  constructor(private dataServ:DataService){}
   ngOnInit(): void {
     this.dataServ.getData().subscribe(x => {
        this.homePageData=x
      })
   }
}
